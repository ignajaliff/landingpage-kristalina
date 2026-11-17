import { type CSSProperties } from 'react'
import { EncabezadoSeccion } from '@/components/ui/EncabezadoSeccion'
import { FadeIn } from '@/components/ui/FadeIn'
import { paginaServicioContent, type ServicioData } from '@/content/servicios'

// Clases completas para que Tailwind las detecte
const COLUMNAS = {
  2: 'min-[900px]:grid-cols-2',
  3: 'min-[900px]:grid-cols-3',
  4: 'min-[900px]:grid-cols-4',
} as const

type ComoFuncionaProps = {
  servicio: ServicioData
}

// Pasos numerados del servicio. Desde 900px van en fila, unidos por una línea del color de la marca.
export function ComoFunciona({ servicio }: ComoFuncionaProps) {
  const { titulo, intro, pasos } = servicio.comoFunciona
  const total = pasos.length
  const columnas = COLUMNAS[total as keyof typeof COLUMNAS] ?? COLUMNAS[4]
  // La línea va del centro del primer círculo al centro del último
  const linea: CSSProperties = { left: `${50 / total}%`, right: `${50 / total}%` }

  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="bg-background">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,128px)]">
        <EncabezadoSeccion
          id="como-funciona-titulo"
          eyebrow={paginaServicioContent.secciones.comoFunciona}
          titulo={titulo}
          intro={intro}
        />

        <div className="relative mt-[clamp(48px,6vw,72px)]">
          <span
            aria-hidden="true"
            style={linea}
            className="bg-marca-accent/35 absolute top-7 hidden h-0.5 min-[900px]:block"
          />
          <ol className={`grid gap-9 min-[900px]:gap-8 ${columnas}`}>
          {pasos.map((paso, i) => (
            <FadeIn
              as="li"
              key={paso.titulo}
              delay={0.1 + i * 0.1}
              className="relative flex gap-5 min-[900px]:flex-col min-[900px]:items-center min-[900px]:text-center"
            >
              <span
                aria-hidden="true"
                className="bg-marca-brand text-primary-foreground ring-background font-display relative grid size-14 shrink-0 place-items-center rounded-full text-xl font-bold ring-8"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-primary text-lg leading-snug font-semibold min-[900px]:mt-5">
                  {paso.titulo}
                </h3>
                <p className="text-foreground/70 mt-2 text-[15px] leading-[1.6]">{paso.texto}</p>
              </div>
            </FadeIn>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
