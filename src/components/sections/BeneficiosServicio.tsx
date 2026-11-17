import { EncabezadoSeccion } from '@/components/ui/EncabezadoSeccion'
import { FadeIn } from '@/components/ui/FadeIn'
import { Icono } from '@/components/ui/Icono'
import { paginaServicioContent, type ServicioData } from '@/content/servicios'

type BeneficiosServicioProps = {
  servicio: ServicioData
}

// Ventajas y beneficios: grilla de tarjetas con ícono, sobre un fondo teñido con la marca
export function BeneficiosServicio({ servicio }: BeneficiosServicioProps) {
  const { titulo, intro, items } = servicio.beneficios

  return (
    <section id="beneficios" aria-labelledby="beneficios-titulo" className="bg-marca-accent/[0.07]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,128px)]">
        <EncabezadoSeccion
          id="beneficios-titulo"
          eyebrow={paginaServicioContent.secciones.beneficios}
          titulo={titulo}
          intro={intro}
        />

        <ul className="mt-[clamp(40px,5vw,64px)] grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn
              as="li"
              key={item.titulo}
              delay={0.05 + (i % 3) * 0.08}
              className="border-border bg-background rounded-[14px] border p-7 shadow-[0_1px_2px_rgba(20,26,58,0.04)]"
            >
              <span className="bg-marca-accent/15 text-marca-brand grid size-12 place-items-center rounded-xl">
                <Icono nombre={item.icono} />
              </span>
              <h3 className="font-display text-primary mt-5 text-lg leading-snug font-semibold">{item.titulo}</h3>
              <p className="text-foreground/70 mt-2 text-[15px] leading-[1.6]">{item.texto}</p>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
