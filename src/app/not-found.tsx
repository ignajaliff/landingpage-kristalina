import { type Metadata } from 'next'
import { BotonLink } from '@/components/ui/BotonLink'
import { notFoundContent } from '@/content/site'

export const metadata: Metadata = {
  title: notFoundContent.titulo,
}

export default function NotFound() {
  return (
    <section className="bg-primary text-primary-foreground flex min-h-svh flex-col justify-center">
      <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,64px)] py-24">
        <p className="font-display text-accent text-[clamp(5rem,20vw,10rem)] leading-none font-bold tracking-[-0.04em]">
          {notFoundContent.codigo}
        </p>
        <h1 className="font-display mt-4 text-[clamp(28px,4vw,44px)] leading-tight font-bold tracking-[-0.025em] text-balance">
          {notFoundContent.titulo}
        </h1>
        <p className="text-primary-muted mt-4 max-w-[520px] text-lg leading-[1.6] text-pretty">
          {notFoundContent.texto}
        </p>
        <div className="mt-9">
          <BotonLink href="/">{notFoundContent.cta}</BotonLink>
        </div>
      </div>
    </section>
  )
}
