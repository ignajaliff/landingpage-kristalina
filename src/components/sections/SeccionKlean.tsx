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

// Sección Kristalina Klean: invertida (texto a la izquierda; logo y foto en arco a la derecha).
// `flex-wrap-reverse`: al apilarse en móvil, la foto (con su logo) queda primero.
export function SeccionKlean() {
  const { slug, nombre, logo, bloque } = getServicioPorMarca('klean')
  const { tema, titulo } = ESTILOS_MARCA.klean
  const { problemas, ctaDetalle, fotoPendiente } = serviciosHomeContent

  return (
    <section
      id={slug}
      data-linea="seccion-klean"
      className={`${tema} bg-marca-fondo relative z-[2] py-[clamp(120px,15vh,170px)]`}
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(16px,3vw,32px)]">
        <div className="pr-[clamp(0px,calc((728px_-_100%)*999),64px)]">
          <div className="flex flex-wrap-reverse items-center gap-x-[clamp(88px,10vw,128px)] gap-y-12">
            <RevelarConLinea marca="klean" data-linea="texto-klean" className="min-w-0 flex-[5_1_320px]">
              <EyebrowServicio>{problemas.klean}</EyebrowServicio>
              <TituloServicio estilo={titulo}>{bloque.titulo}</TituloServicio>
              <ParrafoServicio>{bloque.texto}</ParrafoServicio>
              <CtaDetalles href={`/${slug}/`}>{ctaDetalle}</CtaDetalles>
            </RevelarConLinea>

            <div
              data-linea="foto-klean"
              className="relative flex min-w-0 flex-[7_1_320px] flex-col items-start gap-6 pl-7"
            >
              <LogoServicio marca="klean" logo={logo} alt={nombre} caja="h-[62px] w-[158px]" />
              <FotoPendiente
                etiqueta={fotoPendiente}
                className="aspect-[6/5] rounded-[50%_50%_24px_24px/34%_34%_24px_24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
