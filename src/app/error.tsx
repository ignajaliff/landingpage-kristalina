'use client'

import { BotonLink } from '@/components/ui/BotonLink'
import { errorContent } from '@/content/site'

// Error boundary global: mensaje amigable, cero detalles técnicos
export default function ErrorPage() {
  return (
    <section className="bg-primary text-primary-foreground flex min-h-svh flex-col justify-center">
      <div className="mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,64px)] py-24">
        <h1 className="font-display text-[clamp(32px,4.4vw,56px)] leading-tight font-bold tracking-[-0.025em] text-balance">
          {errorContent.titulo}
        </h1>
        <p className="text-primary-muted mt-4 max-w-[520px] text-lg leading-[1.6] text-pretty">
          {errorContent.texto}
        </p>
        <div className="mt-9">
          <BotonLink href="/">{errorContent.cta}</BotonLink>
        </div>
      </div>
    </section>
  )
}
