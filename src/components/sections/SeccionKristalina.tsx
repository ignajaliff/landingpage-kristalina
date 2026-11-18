import {
  CtaDetalles,
  EyebrowServicio,
  FotoPendiente,
  LogoServicio,
  ParrafoServicio,
  TituloServicio,
} from '@/components/ui/PiezasServicio'
import { RevelarConLinea } from '@/components/ui/RevelarConLinea'
import { serviciosHomeContent } from '@/content/home'
import { getServicioPorMarca } from '@/content/servicios'
import { ESTILOS_MARCA } from '@/lib/marcas'

// Sección Kristalina KI-O: a la izquierda el logo (alineado a la derecha, del lado del canal por donde
// llega la línea) y debajo la foto; a la derecha el texto. Su fondo es el del contenedor de las líneas.
export function SeccionKristalina() {
  const { slug, nombre, logo, bloque } = getServicioPorMarca('kio')
  const { tema, titulo } = ESTILOS_MARCA.kio
  const { problemas, ctaDetalle, fotoPendiente } = serviciosHomeContent

  return (
    <section
      id={slug}
      className={`${tema} relative z-[2] pt-[clamp(120px,15vh,160px)] pb-[clamp(120px,15vh,170px)]`}
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(16px,3vw,32px)]">
        {/* Debajo de 728px deja a la derecha la canaleta por donde bajan las líneas */}
        <div className="pr-[clamp(0px,calc((728px_-_100%)*999),64px)]">
          <div className="flex flex-wrap items-center gap-x-[clamp(88px,10vw,128px)] gap-y-12">
            <div
              data-linea="foto-kio"
              className="relative flex min-w-0 flex-[7_1_320px] flex-col items-end gap-6 pr-7"
            >
              <LogoServicio marca="kio" logo={logo} alt={nombre} caja="h-[62px] w-[184px]" />
              <FotoPendiente etiqueta={fotoPendiente} className="aspect-[5/4] rounded-[24px_24px_24px_140px]" />
            </div>

            <RevelarConLinea marca="kio" data-linea="texto-kio" className="min-w-0 flex-[5_1_320px]">
              <EyebrowServicio>{problemas.kio}</EyebrowServicio>
              <TituloServicio estilo={titulo}>{bloque.titulo}</TituloServicio>
              <ParrafoServicio>{bloque.texto}</ParrafoServicio>
              <CtaDetalles href={`/${slug}/`}>{ctaDetalle}</CtaDetalles>
            </RevelarConLinea>
          </div>
        </div>
      </div>
    </section>
  )
}
