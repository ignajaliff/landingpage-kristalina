import Image from 'next/image'
import { BotonPildora } from '@/components/ui/BotonPildora'
import { FadeIn } from '@/components/ui/FadeIn'
import { heroContent } from '@/content/home'

// Hero de la home: foto a sangre (ciudad sobre el agua, con las tres líneas de las marcas ya en la
// imagen) y contenido centrado. El padding inferior deja lugar al panel de tarjetas que se monta encima.
export function Hero() {
  const { titulo, descripcion, fotoAlt, ctaPrincipal, ctaSecundario } = heroContent

  return (
    <section
      id="inicio"
      className="bg-hero-fondo relative flex min-h-[max(100vh,680px)] flex-col items-center justify-center overflow-hidden px-6 pt-[clamp(88px,12vh,140px)] pb-[calc(clamp(88px,12vh,140px)+13vh)]"
    >
      <Image
        src="/img/fondo-hero-v2.jpg"
        alt={fotoAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-[1] flex max-w-[1160px] flex-col items-center text-center">
        <FadeIn>
          <h1 className="font-hero text-primary m-0 text-[clamp(42px,5.8vw,92px)] leading-[1.02] font-medium tracking-[-0.01em] text-balance">
            {titulo}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-foreground-soft mx-auto mt-[26px] max-w-[780px] text-[clamp(17px,1.45vw,22px)] leading-[1.55] text-pretty">
            {descripcion}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-[38px] flex flex-wrap justify-center gap-3.5">
          <BotonPildora href={ctaPrincipal.href} destino="#contacto" fraccion={0} variante="tinta">
            {ctaPrincipal.texto}
          </BotonPildora>
          <BotonPildora href={ctaSecundario.href} destino='[data-linea="panel"]' fraccion={0.14} variante="claro">
            {ctaSecundario.texto}
          </BotonPildora>
        </FadeIn>
      </div>
    </section>
  )
}
