import { type CSSProperties, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  /** `span` para animar una línea dentro de un título; `li` para animar cada ítem de una lista */
  as?: 'div' | 'span' | 'li'
  /** Segundos de espera: encadenar delays para lograr stagger */
  delay?: number
  className?: string
}

// Entrada con fade + leve subida al cargar la página. Es CSS puro (animación `entrada` en
// globals.css): el contenido se ve aunque el JavaScript no cargue, y respeta "reducir movimiento".
export function FadeIn({ children, as = 'div', delay = 0, className = '' }: FadeInProps) {
  const Tag = as
  const estilo: CSSProperties | undefined = delay ? { animationDelay: `${delay}s` } : undefined

  return (
    <Tag className={`animate-entrada motion-reduce:animate-none ${className}`} style={estilo}>
      {children}
    </Tag>
  )
}
