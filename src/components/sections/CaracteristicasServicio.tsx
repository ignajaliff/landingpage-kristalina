import Image from 'next/image'
import { EncabezadoSeccion } from '@/components/ui/EncabezadoSeccion'
import { FadeIn } from '@/components/ui/FadeIn'
import { FichaProducto } from '@/components/ui/FichaProducto'
import { Icono } from '@/components/ui/Icono'
import { paginaServicioContent, type ServicioData } from '@/content/servicios'

type CaracteristicasServicioProps = {
  servicio: ServicioData
}

// Características de la tecnología: fichas técnicas de cada producto + dónde se aplica (y foto si hay)
export function CaracteristicasServicio({ servicio }: CaracteristicasServicioProps) {
  const { titulo, intro, productos, imagen, aplicaciones, nota } = servicio.caracteristicas
  const unico = productos.length === 1

  return (
    <section id="caracteristicas" aria-labelledby="caracteristicas-titulo" className="bg-background">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,128px)]">
        <EncabezadoSeccion
          id="caracteristicas-titulo"
          eyebrow={paginaServicioContent.secciones.caracteristicas}
          titulo={titulo}
          intro={intro}
        />

        <div className={`mt-[clamp(40px,5vw,64px)] grid gap-6 ${unico ? '' : 'min-[900px]:grid-cols-2'}`}>
          {productos.map((producto, i) => (
            <FadeIn key={producto.nombre} delay={0.05 + i * 0.1}>
              <FichaProducto producto={producto} etiqueta={paginaServicioContent.fichaTecnica} anchoCompleto={unico} />
            </FadeIn>
          ))}
        </div>

        <div className={`mt-6 grid gap-6 ${imagen ? 'min-[900px]:grid-cols-2' : ''}`}>
          {imagen && (
            <FadeIn className="h-full">
              <figure className="border-border bg-surface-hover relative h-full min-h-[240px] overflow-hidden rounded-[14px] border">
                <Image
                  src={imagen.src}
                  alt={imagen.alt}
                  width={imagen.width}
                  height={imagen.height}
                  sizes="(min-width: 900px) 560px, 100vw"
                  className="absolute inset-0 size-full scale-[1.02] object-cover"
                />
                <figcaption className="bg-background/85 text-foreground/70 absolute bottom-3 left-3 rounded-full px-3 py-1 text-[13px] font-bold">
                  {imagen.pie}
                </figcaption>
              </figure>
            </FadeIn>
          )}

          <FadeIn delay={0.1} className="bg-marca-accent/[0.07] h-full rounded-[14px] p-[clamp(24px,3vw,36px)]">
            <h3 className="font-display text-primary text-xl font-semibold">{aplicaciones.titulo}</h3>
            <ul className={`mt-5 grid gap-x-8 gap-y-4 ${imagen ? '' : 'sm:grid-cols-2'}`}>
              {aplicaciones.items.map((item) => (
                <li key={item.titulo} className="flex gap-3">
                  <span className="bg-marca-brand text-primary-foreground mt-0.5 grid size-6 shrink-0 place-items-center rounded-full">
                    <Icono nombre="check" className="size-3.5" />
                  </span>
                  <span className="text-[15px] leading-[1.5]">
                    <strong className="text-primary font-bold">{item.titulo}</strong>
                    {item.texto && <span className="text-foreground/70 block">{item.texto}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {nota && (
          <p className="text-foreground/60 mx-auto mt-8 max-w-[720px] text-center text-sm leading-[1.6]">{nota}</p>
        )}
      </div>
    </section>
  )
}
