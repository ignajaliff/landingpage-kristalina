import { EncabezadoSeccion } from '@/components/ui/EncabezadoSeccion'
import { FadeIn } from '@/components/ui/FadeIn'
import { paginaServicioContent, type ServicioData } from '@/content/servicios'

type TestimoniosServicioProps = {
  servicio: ServicioData
}

// Testimonios sobre fondo del color de la marca. Los marcados `pendiente` muestran una etiqueta
// para que no se confundan con testimonios reales mientras llegan los del cliente.
export function TestimoniosServicio({ servicio }: TestimoniosServicioProps) {
  const { titulo, intro, items } = servicio.testimonios

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-titulo"
      className="bg-marca-brand relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="bg-marca-accent/25 absolute -top-40 left-1/2 -z-10 size-[520px] -translate-x-1/2 rounded-full blur-[120px]"
      />

      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,128px)]">
        <EncabezadoSeccion
          id="testimonios-titulo"
          eyebrow={paginaServicioContent.secciones.testimonios}
          titulo={titulo}
          intro={intro}
          tono="oscuro"
        />

        <ul className="mt-[clamp(40px,5vw,64px)] grid gap-5 min-[900px]:grid-cols-3">
          {items.map((testimonio, i) => (
            <FadeIn
              as="li"
              key={i}
              delay={0.05 + i * 0.1}
              className="border-primary-foreground/15 bg-primary-foreground/[0.06] rounded-[14px] border p-7"
            >
              <figure className="flex h-full flex-col">
                <span aria-hidden="true" className="font-display text-marca-accent text-5xl leading-none">
                  “
                </span>
                <blockquote className="text-primary-foreground/90 mt-2 flex-1 text-base leading-[1.65]">
                  <p>{testimonio.cita}</p>
                </blockquote>
                <figcaption className="border-primary-foreground/15 mt-6 border-t pt-5">
                  <p className="text-primary-foreground font-bold">{testimonio.autor}</p>
                  <p className="text-primary-foreground/65 text-sm">{testimonio.cargo}</p>
                  {testimonio.pendiente && (
                    <p className="border-primary-foreground/30 text-primary-foreground/70 mt-3 inline-block rounded-full border border-dashed px-3 py-0.5 text-[12px] font-bold">
                      {paginaServicioContent.testimonioPendiente}
                    </p>
                  )}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
