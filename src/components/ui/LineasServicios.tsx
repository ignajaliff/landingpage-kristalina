'use client'

import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { calcularTrazos, type Caja, fraccionDibujada, type Medidas, type Trazo } from '@/lib/lineas/geometria'
import { ESTILOS_MARCA, MARCAS, type Marca } from '@/lib/marcas'
import { useProgresoServicios } from './ProgresoServicios'

// Líneas ligadas al scroll: salen de las tarjetas del panel y se dibujan a medida que se baja, hasta
// "conectar" con el logo de su sección. Cada línea llega cuando su final cruza la línea de lectura
// (62 % de la ventana). Es reversible al subir. Las piezas se marcan con data-linea* (ver
// sections/PanelServicios y Seccion*). Si falta alguna, no se dibuja nada y los textos quedan visibles.

const LECTURA = 0.62
const GROSOR = 4 // las tres líneas
const GROSOR_ANILLO = 2.5 // trazo de los anillos de inicio y fin
const MAX_REINTENTOS = 25

type Geometria = { ancho: number; alto: number; trazos: Trazo[]; layoutAncho: boolean }

function medir(raiz: HTMLElement): Medidas | null {
  const rb = raiz.getBoundingClientRect()
  const caja = (selector: string): Caja | null => {
    const el = raiz.querySelector(selector)
    if (!el) return null
    const r = el.getBoundingClientRect()
    return { l: r.left - rb.left, t: r.top - rb.top, r: r.right - rb.left, b: r.bottom - rb.top, w: r.width, h: r.height }
  }
  const porMarca = (atributo: string) => MARCAS.map((m) => caja(`[${atributo}="${m}"]`))

  const panel = caja('[data-linea="panel"]')
  const tarjetas = porMarca('data-linea-tarjeta')
  // Cada logo es la caja de su imagen (sin marco); la línea termina a 14px de ella
  const logos = porMarca('data-linea-logo')
  const resto = ['foto-kio', 'texto-kio', 'texto-klean', 'foto-klean', 'seccion-klean', 'seccion-katharos'].map(
    (nombre) => caja(`[data-linea="${nombre}"]`),
  )
  const [fotoKio, textoKio, textoKlean, fotoKlean, seccionKlean, seccionKatharos] = resto
  if (!panel || !fotoKio || !textoKio || !textoKlean || !fotoKlean || !seccionKlean || !seccionKatharos) return null
  if (tarjetas.some((c) => !c) || logos.some((c) => !c)) return null
  // Layout todavía sin medir (fuentes o estilos sin cargar): nunca guardar geometría vacía
  if (rb.width < 40 || panel.w < 40 || logos.some((c) => c!.w < 4)) return null

  return {
    panel,
    tarjetas: tarjetas as Medidas['tarjetas'],
    logos: logos as Medidas['logos'],
    fotoKio,
    textoKio,
    textoKlean,
    fotoKlean,
    seccionKlean,
    seccionKatharos,
  }
}

type LineasServiciosProps = {
  className?: string
  children: ReactNode
}

export function LineasServicios({ className = '', children }: LineasServiciosProps) {
  const { reportar } = useProgresoServicios()
  const raizRef = useRef<HTMLDivElement>(null)
  const trazosRef = useRef<(SVGPathElement | null)[]>([])
  const puntasRef = useRef<(SVGCircleElement | null)[]>([])
  const finesRef = useRef<(SVGCircleElement | null)[]>([])
  const llegadasRef = useRef<Record<Marca, boolean>>({ kio: false, klean: false, katharos: false })
  const recalcularRef = useRef<() => void>(() => {})
  const [geo, setGeo] = useState<Geometria | null>(null)

  // Scroll → dibujo. Modifica el SVG directamente: no re-renderiza React en cada frame.
  const actualizar = useCallback(() => {
    const raiz = raizRef.current
    if (!raiz || !geo) return
    // Si el contenido cambió de tamaño sin que lo notara el observador (imágenes, fuentes), volver a medir
    if (Math.abs(raiz.offsetWidth - geo.ancho) > 1 || Math.abs(raiz.offsetHeight - geo.alto) > 1) {
      recalcularRef.current()
      return
    }
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const vh = window.innerHeight
    const rb = raiz.getBoundingClientRect()
    const lectura = vh * LECTURA - rb.top
    const scrollMax = Math.max(0, document.documentElement.scrollHeight - vh)
    const lecturaMax = scrollMax + vh * LECTURA - (rb.top + window.scrollY)

    geo.trazos.forEach((trazo, i) => {
      const marca = MARCAS[i]
      const path = trazosRef.current[i]
      const punta = puntasRef.current[i]
      const fin = finesRef.current[i]
      if (!path || !punta || !fin) return

      const T0 = trazo.inicio[1] - vh * 0.24
      // Limitado a lo alcanzable al final de la página: la última línea siempre se completa
      const T1 = Math.max(T0 + 1, Math.min(trazo.fin[1], lecturaMax - 2))
      const u = Math.max(0, Math.min(1, (lectura - T0) / (T1 - T0)))
      const dibujado = reducido ? 1 : u
      const fraccion = fraccionDibujada(trazo, dibujado)
      path.style.strokeDashoffset = String(1 - fraccion)

      const enCamino = dibujado > 0 && dibujado < 1
      if (enCamino) {
        const p = path.getPointAtLength(fraccion * path.getTotalLength())
        punta.setAttribute('cx', String(p.x))
        punta.setAttribute('cy', String(p.y))
      }
      punta.style.opacity = enCamino ? '1' : '0'
      fin.style.fill = dibujado >= 1 ? ESTILOS_MARCA[marca].colorLinea : 'var(--background)'

      if (u >= 1 || reducido) llegadasRef.current[marca] = true
    })

    reportar({ ...llegadasRef.current })
  }, [geo, reportar])

  // Medición: al montar, en cada cambio de tamaño y cuando cargan las fuentes. Reintenta si el layout mide 0.
  useEffect(() => {
    const raiz = raizRef.current
    if (!raiz) return
    let reintentos = 0
    let temporizador = 0
    let activo = true

    const recalcular = () => {
      if (!activo) return
      const m = medir(raiz)
      if (!m) {
        if (reintentos++ < MAX_REINTENTOS) temporizador = window.setTimeout(recalcular, 150)
        return
      }
      reintentos = 0
      const { trazos, ancho } = calcularTrazos(m)
      if (trazos.some((t) => !(t.largo > 50))) return
      setGeo({ ancho: raiz.offsetWidth, alto: raiz.offsetHeight, trazos, layoutAncho: ancho })
    }
    recalcularRef.current = recalcular

    const observador = new ResizeObserver(recalcular)
    observador.observe(raiz)
    document.fonts.ready.then(recalcular)
    return () => {
      activo = false
      window.clearTimeout(temporizador)
      observador.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!geo) return
    let frame = 0
    const programar = () => {
      if (!frame) frame = requestAnimationFrame(() => ((frame = 0), actualizar()))
    }
    actualizar()
    window.addEventListener('scroll', programar, { passive: true })
    window.addEventListener('resize', programar)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', programar)
      window.removeEventListener('resize', programar)
    }
  }, [geo, actualizar])

  return (
    <div ref={raizRef} className={`relative flow-root ${className}`}>
      {geo && (
        <svg
          aria-hidden="true"
          focusable="false"
          width={geo.ancho}
          height={geo.alto}
          className="pointer-events-none absolute top-0 left-0 z-[5] overflow-visible"
        >
          {geo.trazos.map((trazo, i) => {
            const { trazo: claseTrazo, colorLinea } = ESTILOS_MARCA[MARCAS[i]]
            return (
              <g key={MARCAS[i]} className={claseTrazo} fill="none">
                <path
                  ref={(el) => void (trazosRef.current[i] = el)}
                  d={trazo.d}
                  pathLength={1}
                  strokeWidth={GROSOR}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ strokeDasharray: '1 2', strokeDashoffset: 1 }}
                />
                <circle
                  cx={trazo.inicio[0]}
                  cy={trazo.inicio[1]}
                  r={geo.layoutAncho ? 7 : 6}
                  strokeWidth={GROSOR_ANILLO}
                  className="fill-background"
                />
                <circle
                  ref={(el) => void (finesRef.current[i] = el)}
                  cx={trazo.fin[0]}
                  cy={trazo.fin[1]}
                  r={7.5}
                  strokeWidth={GROSOR_ANILLO}
                  className="transition-[fill] duration-300"
                  style={{ fill: 'var(--background)' }}
                />
                <circle
                  ref={(el) => void (puntasRef.current[i] = el)}
                  cx={trazo.inicio[0]}
                  cy={trazo.inicio[1]}
                  r={GROSOR + 1.5}
                  stroke="none"
                  style={{ fill: colorLinea, opacity: 0 }}
                />
              </g>
            )
          })}
        </svg>
      )}
      {children}
    </div>
  )
}
