'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ESTILOS_MARCA, esMarca, type Marca } from '@/lib/marcas'

// Dibuja una línea de color desde cada tarjeta del hero (`data-linea-inicio`) hasta el logo de
// su servicio (`data-linea-fin`). Las líneas bajan por un carril a la derecha (uno por marca,
// el primero el más interno) para no cruzarse nunca. Solo desde 900px: en móvil se ocultan.

const RADIO = 16 // curva de cada esquina
const CARRIL_MARGEN = 28 // distancia del carril más externo al borde derecho de las tarjetas
const CARRIL_SEPARACION = 26
const BAJADA = 34 // cuánto bajan las líneas antes del primer giro
const ESCALON = 22 // diferencia de altura entre los giros de cada línea
const HOLGURA_LOGO = 18 // espacio entre el final de la línea y el logo

type Punto = { x: number; y: number }
type Linea = { marca: Marca; d: string; inicio: Punto; fin: Punto }

// Posición respecto de `raiz` usando offsets: ignora los transform de las animaciones de entrada
function posicion(el: HTMLElement, raiz: HTMLElement) {
  let x = 0
  let y = 0
  let nodo: HTMLElement | null = el
  while (nodo && nodo !== raiz) {
    x += nodo.offsetLeft
    y += nodo.offsetTop
    nodo = nodo.offsetParent as HTMLElement | null
  }
  return { x, y, ancho: el.offsetWidth, alto: el.offsetHeight }
}

function medir(raiz: HTMLElement): Linea[] {
  const inicios = Array.from(raiz.querySelectorAll<HTMLElement>('[data-linea-inicio]'))
  if (inicios.length === 0) return []

  const tarjetas = inicios.map((el) => posicion(el, raiz))
  const derecha = Math.max(...tarjetas.map((t) => t.x + t.ancho))
  const base = Math.max(...tarjetas.map((t) => t.y + t.alto))
  const total = inicios.length

  return inicios.flatMap((el, i) => {
    const marca = el.dataset.lineaInicio
    if (!esMarca(marca)) return []
    const destino = raiz.querySelector<HTMLElement>(`[data-linea-fin="${marca}"]`)
    if (!destino) return []

    const tarjeta = tarjetas[i]
    const logo = posicion(destino, raiz)
    const externo = total - 1 - i // la última tarjeta usa el carril más externo y gira primero

    const sx = tarjeta.x + tarjeta.ancho / 2
    const sy = tarjeta.y + tarjeta.alto
    const giro = base + BAJADA + externo * ESCALON
    const carril = derecha - CARRIL_MARGEN - externo * CARRIL_SEPARACION
    const ex = logo.x + logo.ancho + HOLGURA_LOGO
    const ey = logo.y + logo.alto / 2
    const r = RADIO

    const d = [
      `M ${sx} ${sy}`,
      `V ${giro - r}`,
      `Q ${sx} ${giro} ${sx + r} ${giro}`,
      `H ${carril - r}`,
      `Q ${carril} ${giro} ${carril} ${giro + r}`,
      `V ${ey - r}`,
      `Q ${carril} ${ey} ${carril - r} ${ey}`,
      `H ${ex}`,
    ].join(' ')

    return [{ marca, d, inicio: { x: sx, y: sy }, fin: { x: ex, y: ey } }]
  })
}

type ConectorServiciosProps = {
  children: ReactNode
}

export function ConectorServicios({ children }: ConectorServiciosProps) {
  const raizRef = useRef<HTMLDivElement>(null)
  const [tamano, setTamano] = useState({ ancho: 0, alto: 0 })
  const [lineas, setLineas] = useState<Linea[]>([])

  useEffect(() => {
    const raiz = raizRef.current
    if (!raiz) return
    let activo = true

    const actualizar = () => {
      if (!activo) return
      setTamano({ ancho: raiz.offsetWidth, alto: raiz.offsetHeight })
      setLineas(medir(raiz))
    }

    // Se dispara al observar y en cada cambio de tamaño (resize, salto de línea de un texto)
    const observador = new ResizeObserver(actualizar)
    observador.observe(raiz)
    // Las fuentes web cambian el alto de los textos al cargar
    document.fonts.ready.then(actualizar)

    return () => {
      activo = false
      observador.disconnect()
    }
  }, [])

  return (
    <div ref={raizRef} className="relative">
      {children}

      <svg
        aria-hidden="true"
        focusable="false"
        width={tamano.ancho}
        height={tamano.alto}
        viewBox={`0 0 ${tamano.ancho} ${tamano.alto}`}
        fill="none"
        className="pointer-events-none absolute inset-0 z-[3] hidden min-[900px]:block"
      >
        {lineas.map((linea, i) => {
          const estilos = ESTILOS_MARCA[linea.marca]
          const demora = 0.5 + i * 0.25
          const duracion = 1.6

          return (
            <g key={linea.marca} className={estilos.trazo} strokeWidth={2}>
              <motion.path
                d={linea.d}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: duracion, delay: demora, ease: 'easeInOut' }}
              />
              <circle cx={linea.inicio.x} cy={linea.inicio.y} r={4} className="fill-background" />
              <motion.circle
                cx={linea.fin.x}
                cy={linea.fin.y}
                r={5}
                className={estilos.relleno}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: demora + duracion - 0.1 }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
