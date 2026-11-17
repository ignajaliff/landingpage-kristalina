import { Hero } from '@/components/sections/Hero'
import { Servicios } from '@/components/sections/Servicios'
import { ConectorServicios } from '@/components/ui/ConectorServicios'

// La home es una composición de secciones: cada una vive en components/sections/
export default function HomePage() {
  return (
    <>
      {/* Las líneas unen cada tarjeta del hero con su bloque en Servicios */}
      <ConectorServicios>
        <Hero />
        <Servicios />
      </ConectorServicios>
    </>
  )
}
