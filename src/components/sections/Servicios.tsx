import { BloqueServicio } from '@/components/ui/BloqueServicio'
import { serviciosContent } from '@/content/home'
import { SERVICIOS } from '@/content/servicios'

export function Servicios() {
  return (
    <section
      id="servicios"
      aria-label="Nuestros servicios"
      className="scroll-mt-8 px-[clamp(20px,5vw,64px)] pt-[clamp(8px,2vw,24px)] pb-[clamp(56px,8vw,120px)]"
    >
      {/* Desde 900px el padding derecho deja libre el carril por donde bajan las líneas */}
      <div className="mx-auto max-w-[1200px] min-[900px]:pr-[120px]">
        {SERVICIOS.map((servicio) => (
          <BloqueServicio key={servicio.slug} servicio={servicio} cta={serviciosContent.ctaDetalle} />
        ))}
      </div>
    </section>
  )
}
