// Geometría de las líneas de la home (portada del prototipo del handoff: routeWide, routeNarrow, build).
// Funciones puras: reciben cajas medidas del DOM y devuelven rutas SVG con su "costo de scroll".

export type Caja = { l: number; t: number; r: number; b: number; w: number; h: number }
type Punto = [number, number]

/** Cajas medidas, relativas al <main>. Índices: 0 Kristalina, 1 Klean, 2 Katharos */
export type Medidas = {
  panel: Caja
  tarjetas: [Caja, Caja, Caja]
  logos: [Caja, Caja, Caja]
  fotoKio: Caja
  textoKio: Caja
  textoKlean: Caja
  fotoKlean: Caja
  seccionKlean: Caja
  seccionKatharos: Caja
}

export type Trazo = {
  d: string
  inicio: Punto
  fin: Punto
  largo: number
  costo: number
  /** Largo y costo acumulados al final de cada tramo (para mapear scroll → largo dibujado) */
  largos: number[]
  costos: number[]
}

const CARRIL = 14 // separación entre carriles
const HOLGURA = 14 // distancia entre el final de cada línea y su logo
const COSTO_HORIZONTAL = 0.4 // los tramos horizontales se dibujan más rápido que los verticales (1)
const COSTO_CURVA = 0.7

/** Tarjetas en fila y secciones a dos columnas */
export function esLayoutAncho(m: Medidas): boolean {
  const [a, b, c] = m.tarjetas
  const enFila = Math.abs(a.t - b.t) < 4 && Math.abs(b.t - c.t) < 4
  const aLosLados = m.textoKio.l > m.fotoKio.r + 20 && m.fotoKlean.l > m.textoKlean.r + 20
  return enFila && aLosLados
}

// Ancho: las tres líneas bajan por el canal entre foto y texto, hacen quiebres a 45° en el borde
// de cada sección y se separan hacia su logo. No se cruzan.
function rutasAncho(m: Medidas): Punto[][] {
  const s = CARRIL
  const sy = m.panel.b
  const PL = m.logos
  const cx = (i: number) => m.tarjetas[i].l + m.tarjetas[i].w / 2
  const cy = (i: number) => PL[i].t + PL[i].h / 2
  const G1 = (m.fotoKio.r + m.textoKio.l) / 2
  const G2 = (m.textoKlean.r + m.fotoKlean.l) / 2
  const G3 = PL[2].l + PL[2].w / 2

  // Quiebre a 45° de xa a xb, centrado en la altura yb, desplazado `o` px de su carril
  const quiebre = (xa: number, xb: number, yb: number, o: number): Punto[] => {
    const dx = xb - xa
    if (Math.abs(dx) < 2) return []
    const h = Math.abs(dx)
    const sh = -Math.sign(dx) * 0.4142 * o
    return [
      [xa + o, yb - h / 2 + sh],
      [xb + o, yb + h / 2 + sh],
    ]
  }

  const dN = G1 - cx(2) // la tarjeta de Katharos está al centro
  const yN = sy + 18
  const yA = sy + Math.max(64, 18 + Math.abs(dN) + 40)

  const azul: Punto[] = [
    [cx(0), sy],
    [cx(0), yA],
    [G1 - s, yA],
    [G1 - s, cy(0)],
    [PL[0].r + HOLGURA, cy(0)],
  ]
  const verde: Punto[] = [
    [cx(1), sy],
    [cx(1), yA],
    [G1 + s, yA],
    ...quiebre(G1, G2, m.seccionKlean.t, s),
    [G2 + s, cy(1)],
    [PL[1].l - HOLGURA, cy(1)],
  ]
  const marino: Punto[] = [
    [cx(2), sy],
    ...(Math.abs(dN) >= 2
      ? ([
          [cx(2), yN],
          [G1, yN + Math.abs(dN)],
        ] as Punto[])
      : []),
    ...quiebre(G1, G2, m.seccionKlean.t, 0),
    ...quiebre(G2, G3, m.seccionKatharos.t, 0),
    [G3, PL[2].t - HOLGURA],
  ]
  return [azul, verde, marino]
}

// Angosto: tres carriles por la canaleta derecha; cada línea gira arriba de su logo y baja hasta él
function rutasAngosto(m: Medidas): Punto[][] {
  const sy = m.panel.b
  const base = m.fotoKio.r + 18
  return [0, 1, 2].map((i) => {
    const lx = base + i * CARRIL
    const px = m.logos[i].l + m.logos[i].w / 2
    const pt = m.logos[i].t
    return [
      [lx, sy],
      [lx, pt - 46],
      [px, pt - 46],
      [px, pt - HOLGURA],
    ]
  })
}

// Polilínea → path con esquinas curvas (22 px en giros de ~90°, 30 px en quiebres de 45°) + costo por tramo
function construir(pts: Punto[]): Trazo {
  const f = (v: number) => Math.round(v * 10) / 10
  const n = pts.length
  const dist = (a: Punto, b: Punto) => Math.hypot(b[0] - a[0], b[1] - a[1])
  const dir = (a: Punto, b: Punto): Punto => {
    const d = dist(a, b) || 1
    return [(b[0] - a[0]) / d, (b[1] - a[1]) / d]
  }

  const tramos: number[] = []
  for (let k = 0; k < n - 1; k++) tramos.push(dist(pts[k], pts[k + 1]))

  type Esquina = { t: number; r: number; th: number; din: Punto; dout: Punto; sweep: number }
  const esquinas: (Esquina | null)[] = [null]
  for (let k = 1; k < n - 1; k++) {
    const din = dir(pts[k - 1], pts[k])
    const dout = dir(pts[k], pts[k + 1])
    const th = Math.acos(Math.max(-1, Math.min(1, din[0] * dout[0] + din[1] * dout[1])))
    if (th < 0.01) {
      esquinas.push(null)
      continue
    }
    let r = th > 1.2 ? 22 : 30
    let t = r * Math.tan(th / 2)
    const tMax = Math.min(
      k - 1 === 0 ? tramos[k - 1] : tramos[k - 1] / 2,
      k + 1 === n - 1 ? tramos[k] : tramos[k] / 2,
    )
    if (t > tMax) {
      t = tMax
      r = t / Math.tan(th / 2)
    }
    const sweep = din[0] * dout[1] - din[1] * dout[0] > 0 ? 1 : 0
    esquinas.push({ t, r, th, din, dout, sweep })
  }

  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`
  const piezas: [number, number][] = [] // [largo, costo por px]
  let actual = pts[0]
  const recta = (hasta: Punto) => {
    const l = dist(actual, hasta)
    if (l > 0.05) {
      d += `L${f(hasta[0])} ${f(hasta[1])}`
      const vertical = Math.abs(hasta[1] - actual[1]) / l
      piezas.push([l, COSTO_HORIZONTAL + (1 - COSTO_HORIZONTAL) * vertical])
    }
    actual = hasta
  }

  for (let k = 1; k < n; k++) {
    const p = pts[k]
    const c = esquinas[k]
    if (k === n - 1 || !c) {
      recta(p)
      continue
    }
    recta([p[0] - c.din[0] * c.t, p[1] - c.din[1] * c.t])
    const despues: Punto = [p[0] + c.dout[0] * c.t, p[1] + c.dout[1] * c.t]
    d += `A${f(c.r)} ${f(c.r)} 0 0 ${c.sweep} ${f(despues[0])} ${f(despues[1])}`
    piezas.push([c.r * c.th, COSTO_CURVA])
    actual = despues
  }

  let largo = 0
  let costo = 0
  const largos = [0]
  const costos = [0]
  for (const [l, c] of piezas) {
    largo += l
    costo += l * c
    largos.push(largo)
    costos.push(costo)
  }
  return { d, inicio: pts[0], fin: pts[n - 1], largo, costo, largos, costos }
}

export function calcularTrazos(m: Medidas): { trazos: Trazo[]; ancho: boolean } {
  const ancho = esLayoutAncho(m)
  const rutas = ancho ? rutasAncho(m) : rutasAngosto(m)
  return { trazos: rutas.map(construir), ancho }
}

/** Fracción del largo dibujada para un avance `u` (0–1) repartido por costo de scroll */
export function fraccionDibujada(trazo: Trazo, u: number): number {
  if (u >= 1 || trazo.largo === 0) return 1
  const c = u * trazo.costo
  let j = 0
  while (j < trazo.costos.length - 2 && trazo.costos[j + 1] < c) j++
  const c0 = trazo.costos[j]
  const c1 = trazo.costos[j + 1]
  const tramo = c1 > c0 ? (c - c0) / (c1 - c0) : 1
  const largo = trazo.largos[j] + tramo * (trazo.largos[j + 1] - trazo.largos[j])
  return largo / trazo.largo
}
