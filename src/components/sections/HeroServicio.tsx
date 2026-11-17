import Image from 'next/image'
import Link from 'next/link'
import { BotonLink } from '@/components/ui/BotonLink'
import { FadeIn } from '@/components/ui/FadeIn'
import { OndasAgua } from '@/components/ui/OndasAgua'
import { paginaServicioContent, type ServicioData } from '@/content/servicios'
import { ESTILOS_MARCA } from '@/lib/marcas'

type HeroServicioProps = {
  servicio: ServicioData
}

// Hero de la página de cada servicio: logo centrado sobre ondas de agua, teñido con el color de su marca
export function HeroServicio({ servicio }: HeroServicioProps) {
  const { marca, nombre, logo, pagina } = servicio
  const estilos = ESTILOS_MARCA[marca]
  const { eyebrow, volver, volverHref, ctaPrincipal, ctaSecundario } = paginaServicioContent

  return (
    <section
      className={`${estilos.tema} bg-hero-servicio border-t-marca-accent relative isolate overflow-hidden border-t-4`}
    >
      <OndasAgua className="pointer-events-none absolute top-[clamp(40px,6vw,96px)] left-1/2 -z-10 w-[max(1100px,100vw)] -translate-x-1/2 -translate-y-[38%]" />

      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)] pt-6">
        <Link
          href={volverHref}
          className="text-primary/70 hover:text-marca-brand inline-flex min-h-11 items-center gap-2 text-[15px] font-bold transition-colors duration-200"
        >
          <span aria-hidden="true">←</span> {volver}
        </Link>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-[clamp(20px,5vw,64px)] pt-[clamp(40px,6vw,88px)] pb-[clamp(56px,7vw,96px)] text-center">
        <FadeIn>
          {/* multiply funde el fondo blanco de los logos con el fondo teñido */}
          <Image
            src={logo.src}
            alt={nombre}
            width={logo.width}
            height={logo.height}
            priority
            className={`${estilos.alturaLogoHero} w-auto max-w-[85vw] object-contain mix-blend-multiply`}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <span aria-hidden="true" className="bg-marca-accent mt-[clamp(28px,4vw,44px)] block h-1 w-14 rounded-full" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-marca-brand mt-6 text-[13px] font-bold tracking-[0.14em] uppercase">
            {eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-display text-primary mx-auto mt-4 max-w-[760px] text-[clamp(34px,4.6vw,58px)] leading-[1.08] font-bold tracking-[-0.025em] text-balance">
            {pagina.titulo}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-foreground/75 mx-auto mt-5 max-w-[600px] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-pretty">
            {pagina.descripcion}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-9 flex flex-wrap justify-center gap-3">
          <BotonLink href={ctaPrincipal.href} variante="marca">
            {ctaPrincipal.texto}
          </BotonLink>
          <BotonLink href={ctaSecundario.href} variante="marcaSecundario">
            {ctaSecundario.texto}
          </BotonLink>
        </FadeIn>

        {/* Datos clave del servicio: valor grande arriba, etiqueta abajo */}
        <FadeIn
          delay={0.5}
          className="border-marca-brand/15 mt-[clamp(48px,6vw,72px)] w-full max-w-[880px] border-t pt-[clamp(24px,3vw,36px)]"
        >
          <dl className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            {pagina.datos.map((dato) => (
              <div key={dato.etiqueta} className="flex flex-col-reverse gap-1">
                <dt className="text-foreground/65 text-sm leading-snug">{dato.etiqueta}</dt>
                <dd className="font-display text-marca-brand text-[clamp(20px,2vw,24px)] leading-tight font-bold">
                  {dato.valor}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  )
}
