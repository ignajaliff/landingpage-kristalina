import Image from 'next/image'
import { EncabezadoSeccion } from '@/components/ui/EncabezadoSeccion'
import { FadeIn } from '@/components/ui/FadeIn'
import { Icono } from '@/components/ui/Icono'
import { paginaServicioContent, type ServicioData } from '@/content/servicios'

type ResultadosServicioProps = {
  servicio: ServicioData
}

// Galería de instalaciones. Mientras no haya foto, cada espacio muestra un recuadro de "foto pendiente".
export function ResultadosServicio({ servicio }: ResultadosServicioProps) {
  const { titulo, intro, fotos, nota } = servicio.resultados

  return (
    <section id="resultados" aria-labelledby="resultados-titulo" className="bg-background">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,128px)]">
        <EncabezadoSeccion
          id="resultados-titulo"
          eyebrow={paginaServicioContent.secciones.resultados}
          titulo={titulo}
          intro={intro}
        />

        <ul className="mt-[clamp(40px,5vw,64px)] grid gap-6 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
          {fotos.map((foto, i) => (
            <FadeIn as="li" key={foto.pie} delay={0.05 + i * 0.1}>
              <figure>
                {foto.imagen ? (
                  <Image
                    src={foto.imagen.src}
                    alt={foto.imagen.alt}
                    width={foto.imagen.width}
                    height={foto.imagen.height}
                    sizes="(min-width: 900px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3] w-full rounded-[14px] object-cover"
                  />
                ) : (
                  <div className="border-marca-accent/45 bg-marca-accent/[0.06] text-marca-brand/70 flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-[14px] border-2 border-dashed">
                    <Icono nombre="camara" className="size-9" />
                    <span className="text-sm font-bold">{paginaServicioContent.fotoPendiente}</span>
                  </div>
                )}
                <figcaption className="text-foreground/75 mt-3 text-[15px] leading-[1.5]">{foto.pie}</figcaption>
              </figure>
            </FadeIn>
          ))}
        </ul>

        {nota && (
          <p className="text-foreground/60 mx-auto mt-10 max-w-[720px] text-center text-sm leading-[1.6]">{nota}</p>
        )}
      </div>
    </section>
  )
}
