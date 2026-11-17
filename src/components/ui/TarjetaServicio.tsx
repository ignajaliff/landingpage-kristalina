import Link from 'next/link'
import { ESTILOS_MARCA, type Marca } from '@/lib/marcas'

type TarjetaServicioProps = {
  marca: Marca
  titulo: string
  href: string
  cta: string
}

// Tarjeta del hero. `data-linea-inicio` marca el punto de donde sale su línea (ver ConectorServicios).
export function TarjetaServicio({ marca, titulo, href, cta }: TarjetaServicioProps) {
  const estilos = ESTILOS_MARCA[marca]

  return (
    <Link
      href={href}
      data-linea-inicio={marca}
      className={`${estilos.bordeSuperior} bg-background hover:bg-surface-hover flex h-full flex-col gap-5 border-t-4 px-7 py-7 transition-colors duration-200`}
    >
      <h2 className="font-display text-primary m-0 flex-1 text-lg leading-[1.3] font-semibold">
        {titulo}
      </h2>
      <span className={`${estilos.texto} text-[15px] font-bold`}>
        {cta} <span aria-hidden="true">→</span>
      </span>
    </Link>
  )
}
