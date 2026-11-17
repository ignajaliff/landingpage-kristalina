import { BotonLink } from '@/components/ui/BotonLink'
import { FadeIn } from '@/components/ui/FadeIn'
import { TarjetaServicio } from '@/components/ui/TarjetaServicio'
import { heroContent } from '@/content/home'

export function Hero() {
  const { eyebrow, titulo, descripcion, ctaPrincipal, ctaSecundario, ctaTarjeta, tarjetas } =
    heroContent

  return (
    <>
      {/* Hero: contenido centrado. El padding inferior deja lugar a las tarjetas que se montan encima */}
      <section id="inicio" className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-[clamp(20px,5vw,64px)] pt-[clamp(72px,10vw,140px)] pb-[clamp(128px,15vw,216px)] text-center">
          <FadeIn>
            <p className="text-accent-soft m-0 flex items-center gap-3 text-[13px] font-bold tracking-[0.14em] uppercase">
              <span aria-hidden="true" className="bg-accent h-0.5 w-8 flex-none" />
              {eyebrow}
              <span aria-hidden="true" className="bg-accent h-0.5 w-8 flex-none" />
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display mx-auto my-[22px] max-w-[820px] text-[clamp(36px,5vw,64px)] leading-[1.06] font-bold tracking-[-0.025em] text-balance">
              {titulo}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-primary-muted mx-auto mb-9 max-w-[600px] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-pretty">
              {descripcion}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-wrap justify-center gap-3">
            <BotonLink href={ctaPrincipal.href}>{ctaPrincipal.texto}</BotonLink>
            <BotonLink href={ctaSecundario.href} variante="secundario">
              {ctaSecundario.texto}
            </BotonLink>
          </FadeIn>
        </div>
      </section>

      {/* Tarjetas de servicios: se montan sobre el borde inferior del hero */}
      <section
        aria-label="Servicios"
        className="relative z-[2] mt-[clamp(-96px,-7vw,-64px)] px-[clamp(20px,5vw,64px)] pb-[clamp(48px,6vw,80px)]"
      >
        <FadeIn delay={0.35}>
          <ul className="bg-border mx-auto grid max-w-[1200px] gap-px overflow-hidden rounded-[10px] shadow-[0_24px_60px_rgb(20_26_58/0.18)] min-[900px]:grid-cols-3">
            {tarjetas.map((tarjeta) => (
              <li key={tarjeta.marca}>
                <TarjetaServicio {...tarjeta} cta={ctaTarjeta} />
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>
    </>
  )
}
