import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BeneficiosServicio } from '@/components/sections/BeneficiosServicio'
import { CaracteristicasServicio } from '@/components/sections/CaracteristicasServicio'
import { ComoFunciona } from '@/components/sections/ComoFunciona'
import { HeroServicio } from '@/components/sections/HeroServicio'
import { ResultadosServicio } from '@/components/sections/ResultadosServicio'
import { TestimoniosServicio } from '@/components/sections/TestimoniosServicio'
import { SERVICIOS, getServicio } from '@/content/servicios'
import { ESTILOS_MARCA } from '@/lib/marcas'

// Una página por línea de servicio, generada en el build: /kristalina-ki-o/, /kristalina-klean/, /katharos/
// Cualquier otro slug no se genera y cae en la 404.
export const dynamicParams = false

export function generateStaticParams() {
  return SERVICIOS.map((servicio) => ({ servicio: servicio.slug }))
}

type ServicioPageProps = {
  params: Promise<{ servicio: string }>
}

export async function generateMetadata({ params }: ServicioPageProps): Promise<Metadata> {
  const servicio = getServicio((await params).servicio)
  if (!servicio) return {}

  return {
    title: servicio.nombre,
    description: servicio.pagina.metaDescripcion,
  }
}

export default async function ServicioPage({ params }: ServicioPageProps) {
  const servicio = getServicio((await params).servicio)
  if (!servicio) notFound()

  // El tema tiñe todas las secciones con el color de la marca del servicio
  return (
    <div className={ESTILOS_MARCA[servicio.marca].tema}>
      <HeroServicio servicio={servicio} />
      <ComoFunciona servicio={servicio} />
      <BeneficiosServicio servicio={servicio} />
      <CaracteristicasServicio servicio={servicio} />
      <TestimoniosServicio servicio={servicio} />
      <ResultadosServicio servicio={servicio} />
    </div>
  )
}
