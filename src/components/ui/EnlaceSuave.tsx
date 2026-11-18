'use client'

import { type MouseEvent, type ReactNode } from 'react'
import { scrollSuaveHasta } from '@/lib/scrollSuave'

type EnlaceSuaveProps = {
  /** Ancla de respaldo: sin JavaScript, el navegador salta acá */
  href: string
  /** Selector del elemento al que se desplaza con JavaScript */
  destino: string
  /** Dónde queda el destino, como fracción del alto de la ventana */
  fraccion: number
  className?: string
  children: ReactNode
  [dato: `data-${string}`]: string | undefined
}

// Enlace interno con el scroll suave de la home (ver lib/scrollSuave.ts)
export function EnlaceSuave({ href, destino, fraccion, className, children, ...datos }: EnlaceSuaveProps) {
  function handleClick(evento: MouseEvent<HTMLAnchorElement>) {
    // Ctrl/Cmd + clic o clic del medio: dejar que el navegador abra la pestaña nueva
    if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.button !== 0) return
    const el = document.querySelector(destino)
    if (!el) return
    evento.preventDefault()
    scrollSuaveHasta(el, fraccion)
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...datos}>
      {children}
    </a>
  )
}
