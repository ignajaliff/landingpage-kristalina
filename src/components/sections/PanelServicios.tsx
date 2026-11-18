import { EnlaceSuave } from '@/components/ui/EnlaceSuave'
import { serviciosHomeContent } from '@/content/home'
import { getServicioPorMarca } from '@/content/servicios'
import { ESTILOS_MARCA } from '@/lib/marcas'

// Panel de tarjetas montado sobre el borde inferior del hero. De cada tarjeta sale la línea de su
// marca (`data-linea-tarjeta`). 3 columnas; 1 cuando el contenedor mide menos de 620px.
export function PanelServicios() {
  const { etiquetaPanel, ctaTarjeta, problemas, ordenTarjetas } = serviciosHomeContent

  return (
    <section
      id="servicios"
      aria-label={etiquetaPanel}
      className="@container relative z-[3] mx-auto -mt-[clamp(32px,5.5vh,64px)] max-w-[1200px] px-[clamp(16px,3vw,32px)]"
    >
      <ul
        data-linea="panel"
        className="bg-border shadow-panel m-0 grid list-none gap-px overflow-hidden rounded-2xl p-0 @min-[620px]:grid-cols-3"
      >
        {ordenTarjetas.map((marca) => {
          const { tema, bordeTarjeta } = ESTILOS_MARCA[marca]
          return (
            <li key={marca} className="flex">
              <EnlaceSuave
                href={`#${getServicioPorMarca(marca).slug}`}
                destino={`[data-linea-logo="${marca}"]`}
                fraccion={0.16}
                data-linea-tarjeta={marca}
                className={`${tema} ${bordeTarjeta} bg-background hover:bg-surface-hover flex min-h-[150px] w-full flex-col justify-between gap-[22px] border-t-4 px-[clamp(22px,2.4vw,32px)] py-[clamp(22px,2.2vw,30px)] transition-colors duration-200`}
              >
                <span className="text-primary text-[clamp(17px,1.35vw,20px)] leading-[1.35] font-medium text-pretty">
                  {problemas[marca]}
                </span>
                <span className="text-marca-brand text-base font-medium">
                  {ctaTarjeta} <span aria-hidden="true">→</span>
                </span>
              </EnlaceSuave>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
