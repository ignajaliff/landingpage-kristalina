import Image from 'next/image'
import { BotonLink } from '@/components/ui/BotonLink'
import { type ServicioData } from '@/content/servicios'
import { ESTILOS_MARCA } from '@/lib/marcas'

type BloqueServicioProps = {
  servicio: ServicioData
  cta: string
}

// Bloque de un servicio en la home. `data-linea-fin` marca el logo donde termina la línea de su
// tarjeta. En móvil no hay líneas: el color de la marca va como borde izquierdo.
export function BloqueServicio({ servicio, cta }: BloqueServicioProps) {
  const { slug, marca, nombre, logo, bloque } = servicio
  const estilos = ESTILOS_MARCA[marca]

  return (
    <article
      id={slug}
      className={`${estilos.tema} ${estilos.bordeIzquierdo} scroll-mt-8 border-l-4 py-[clamp(36px,5vw,72px)] pl-5 min-[900px]:border-l-0 min-[900px]:pl-0`}
    >
      <span data-linea-fin={marca} className="inline-flex h-[54px] items-center">
        {/* multiply funde el fondo blanco de los logos con el fondo de la página */}
        <Image
          src={logo.src}
          alt={nombre}
          width={logo.width}
          height={logo.height}
          className={`${estilos.alturaLogo} w-auto max-w-[200px] object-contain mix-blend-multiply`}
        />
      </span>
      <h2 className="font-display text-primary mt-6 text-[clamp(24px,2.6vw,34px)] leading-[1.15] font-bold tracking-[-0.02em] text-balance">
        {bloque.titulo}
      </h2>
      <p className="text-foreground/75 mt-4 max-w-[640px] text-[17px] leading-[1.65] text-pretty">
        {bloque.texto}
      </p>
      <div className="mt-7">
        <BotonLink href={`/${slug}/`} variante="marca">
          {cta} <span aria-hidden="true">→</span>
        </BotonLink>
      </div>
    </article>
  )
}
