import { type ReactNode } from 'react'
import Link from 'next/link'

const VARIANTES = {
  // Sobre el fondo azul marino
  primario: 'bg-accent text-accent-foreground px-7 py-[15px] hover:bg-primary-foreground',
  secundario:
    'border border-primary-foreground/45 text-primary-foreground px-[27px] py-[14px] hover:border-primary-foreground',
  // Sobre fondo claro, con el color de la marca activa (requiere una clase tema-* en un ancestro)
  marca: 'bg-marca-brand text-primary-foreground px-7 py-[15px] hover:bg-primary',
  marcaSecundario:
    'border border-marca-brand/30 text-marca-brand px-[27px] py-[14px] hover:border-marca-brand',
} as const

type BotonLinkProps = {
  href: string
  children: ReactNode
  variante?: keyof typeof VARIANTES
}

// Enlace con aspecto de botón (CTA)
export function BotonLink({ href, children, variante = 'primario' }: BotonLinkProps) {
  return (
    <Link
      href={href}
      className={`${VARIANTES[variante]} inline-block rounded-full text-base font-bold transition-colors duration-200`}
    >
      {children}
    </Link>
  )
}
