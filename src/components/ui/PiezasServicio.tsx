import { type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type Marca } from '@/lib/marcas'
import { Icono } from './Icono'

// Piezas comunes de las secciones de servicio de la home. Toman el color de la marca de una
// clase tema-* en un ancestro (bg-marca-brand, text-marca-titulo...).

type LogoServicioProps = {
  marca: Marca
  logo: { src: string; width: number; height: number }
  alt: string
  /** Tamaño de la caja del logo (el logo se ajusta adentro sin deformarse) */
  caja: string
}

// Logo sin marco ni fondo, apoyado sobre el color de la sección. `data-linea-logo` marca dónde
// termina la línea de su marca.
export function LogoServicio({ marca, logo, alt, caja }: LogoServicioProps) {
  return (
    <div data-linea-logo={marca} className={`relative flex-none ${caja}`}>
      <Image src={logo.src} alt={alt} width={logo.width} height={logo.height} className="size-full object-contain" />
    </div>
  )
}

type FotoPendienteProps = {
  etiqueta: string
  /** Forma y proporción de la foto */
  className: string
}

// Lugar de la foto de la sección: la provee el cliente. Mientras tanto, un recuadro del color de la marca.
// z-[6]: queda por encima del SVG de las líneas (z-[5]).
export function FotoPendiente({ etiqueta, className }: FotoPendienteProps) {
  return (
    <div
      className={`bg-marca-foto text-marca-brand/70 shadow-foto relative z-[6] flex w-full flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
    >
      <Icono nombre="imagen" className="size-7" grosor={1.5} />
      <span className="text-sm font-medium">{etiqueta}</span>
    </div>
  )
}

export function EyebrowServicio({ children }: { children: ReactNode }) {
  return (
    <p className="text-marca-brand m-0 flex items-center gap-3 text-[13px] font-medium tracking-[0.16em] uppercase">
      <span aria-hidden="true" className="bg-marca-linea h-0.5 w-7 flex-none" />
      <span>{children}</span>
    </p>
  )
}

type TituloServicioProps = {
  /** Fuente, peso, tamaño y tracking propios de la marca (ESTILOS_MARCA[marca].titulo) */
  estilo: string
  children: ReactNode
}

export function TituloServicio({ estilo, children }: TituloServicioProps) {
  return <h2 className={`text-marca-titulo mt-[18px] mb-0 text-balance ${estilo}`}>{children}</h2>
}

export function ParrafoServicio({ className = 'mt-[22px]', children }: { className?: string; children: ReactNode }) {
  return (
    <p
      className={`text-foreground-muted mb-0 max-w-[34em] text-[clamp(17px,1.35vw,20px)] leading-[1.65] text-pretty ${className}`}
    >
      {children}
    </p>
  )
}

export function CtaDetalles({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="bg-marca-brand text-primary-foreground shadow-cta hover:bg-marca-hover mt-[34px] inline-flex h-[58px] items-center gap-4 rounded-full pr-[9px] pl-7 text-[17px] font-medium whitespace-nowrap transition-[background-color,translate] duration-200 hover:-translate-y-px"
    >
      <span>{children}</span>
      <span className="bg-primary-foreground/16 inline-flex size-10 items-center justify-center rounded-full">
        <Icono nombre="flecha" className="size-[18px]" grosor={2} />
      </span>
    </Link>
  )
}
