import { FadeIn } from '@/components/ui/FadeIn'

type EncabezadoSeccionProps = {
  id: string // id del h2: la sección lo usa en aria-labelledby
  eyebrow: string
  titulo: string
  intro?: string
  // `oscuro` para secciones con fondo del color de la marca
  tono?: 'claro' | 'oscuro'
}

// Eyebrow + título + bajada, centrados. Común a todas las secciones de las páginas de servicio.
export function EncabezadoSeccion({ id, eyebrow, titulo, intro, tono = 'claro' }: EncabezadoSeccionProps) {
  const oscuro = tono === 'oscuro'

  return (
    <FadeIn className="mx-auto max-w-[720px] text-center">
      <p
        className={`${oscuro ? 'text-primary-foreground/75' : 'text-marca-brand'} flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.14em] uppercase`}
      >
        <span aria-hidden="true" className="bg-marca-accent hidden h-0.5 w-6 shrink-0 rounded-full min-[640px]:block" />
        {eyebrow}
        <span aria-hidden="true" className="bg-marca-accent hidden h-0.5 w-6 shrink-0 rounded-full min-[640px]:block" />
      </p>
      <h2
        id={id}
        className={`${oscuro ? 'text-primary-foreground' : 'text-primary'} font-display mt-4 text-[clamp(28px,3.4vw,42px)] leading-[1.12] font-bold tracking-[-0.02em] text-balance`}
      >
        {titulo}
      </h2>
      {intro && (
        <p
          className={`${oscuro ? 'text-primary-foreground/80' : 'text-foreground/70'} mt-4 text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-pretty`}
        >
          {intro}
        </p>
      )}
    </FadeIn>
  )
}
