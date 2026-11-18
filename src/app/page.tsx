import { Contacto } from '@/components/sections/Contacto'
import { Hero } from '@/components/sections/Hero'
import { PanelServicios } from '@/components/sections/PanelServicios'
import { SeccionKatharos } from '@/components/sections/SeccionKatharos'
import { SeccionKlean } from '@/components/sections/SeccionKlean'
import { SeccionKristalina } from '@/components/sections/SeccionKristalina'
import { LineasServicios } from '@/components/ui/LineasServicios'
import { ProgresoServicios } from '@/components/ui/ProgresoServicios'
import { fuentesHome } from './fonts'

// La home es una composición de secciones: cada una vive en components/sections/. Sin header (handoff).
// ProgresoServicios comparte con cada sección si su línea ya llegó (para revelar su texto).
export default function HomePage() {
  return (
    <div className={`${fuentesHome} overflow-x-clip`}>
      <ProgresoServicios>
        <Hero />
        {/* Las líneas salen de cada tarjeta del panel y se dibujan con el scroll hasta el logo de su sección */}
        <LineasServicios className="bg-kio-fondo">
          <PanelServicios />
          <SeccionKristalina />
          <SeccionKlean />
          <SeccionKatharos />
        </LineasServicios>
      </ProgresoServicios>
      <Contacto />
    </div>
  )
}
