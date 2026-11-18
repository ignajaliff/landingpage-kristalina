import { type ReactNode } from 'react'
import { EnlaceSuave } from './EnlaceSuave'

// Botones píldora del hero (handoff): alto 62px, DM Sans 500 18px. Ambos bajan con scroll suave.
const VARIANTES = {
  tinta:
    'bg-primary text-primary-foreground shadow-boton px-[34px] hover:bg-primary-hover hover:-translate-y-px',
  claro:
    'border border-border-boton bg-primary-foreground/86 text-primary px-8 hover:border-border-boton-hover hover:bg-primary-foreground',
} as const

type BotonPildoraProps = {
  href: string
  destino: string
  fraccion: number
  variante: keyof typeof VARIANTES
  children: ReactNode
}

export function BotonPildora({ href, destino, fraccion, variante, children }: BotonPildoraProps) {
  return (
    <EnlaceSuave
      href={href}
      destino={destino}
      fraccion={fraccion}
      className={`${VARIANTES[variante]} inline-flex h-[62px] items-center justify-center rounded-full text-lg font-medium whitespace-nowrap transition-[background-color,border-color,translate] duration-200`}
    >
      {children}
    </EnlaceSuave>
  )
}
