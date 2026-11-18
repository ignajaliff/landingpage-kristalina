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

// Sección Katharos: logo centrado y debajo la foto ancha; después el texto en dos columnas
// (eyebrow + título | párrafo + botón), una sola debajo de 760px.
export function SeccionKatharos() {
  const { slug, nombre, logo, bloque } = getServicioPorMarca('katharos')
  const { tema, titulo } = ESTILOS_MARCA.katharos
  const { problemas, ctaDetalle, fotoPendiente } = serviciosHomeContent

  return (
    <section
      id={slug}
      data-linea="seccion-katharos"
      className={`${tema} bg-marca-fondo relative z-[2] pt-[clamp(120px,15vh,170px)] pb-[clamp(140px,20vh,220px)]`}
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(16px,3vw,32px)]">
        <div className="@container pr-[clamp(0px,calc((728px_-_100%)*999),64px)]">
          <div className="relative flex flex-col items-center gap-7">
            <LogoServicio marca="katharos" logo={logo} alt={nombre} caja="h-14 w-[246px]" />
            <FotoPendiente etiqueta={fotoPendiente} className="h-[clamp(220px,36vw,430px)] rounded-[28px]" />
          </div>

          <RevelarConLinea
            marca="katharos"
            className="mt-14 grid items-start gap-x-[72px] gap-y-6 @min-[760px]:grid-cols-2"
          >
            <div>
              <EyebrowServicio>{problemas.katharos}</EyebrowServicio>
              <TituloServicio estilo={titulo}>{bloque.titulo}</TituloServicio>
            </div>
            <div className="pt-1.5">
              <ParrafoServicio className="mt-0">{bloque.texto}</ParrafoServicio>
              <CtaDetalles href={`/${slug}/`}>{ctaDetalle}</CtaDetalles>
            </div>
          </RevelarConLinea>
        </div>
      </div>
    </section>
  )
}
