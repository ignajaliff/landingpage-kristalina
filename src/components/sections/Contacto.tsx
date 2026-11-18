import { Icono } from '@/components/ui/Icono'
import { contactoContent } from '@/content/contacto'

// Cierre de la home: datos de contacto + mapa, y una barra inferior con las tres marcas.
// Los datos sin `href` se muestran como texto; el mapa aparece cuando hay dirección (content/contacto.ts).
export function Contacto() {
  const { titulo, datos, mapa, marcas } = contactoContent

  return (
    <section
      id="contacto"
      className="bg-contacto-fondo text-primary-foreground relative pt-[clamp(96px,13vh,150px)] pb-[clamp(48px,7vh,72px)]"
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(16px,3vw,32px)]">
        <div className="flex flex-wrap items-stretch gap-x-[clamp(48px,7vw,104px)] gap-y-14">
          <div className="min-w-0 flex-[6_1_340px]">
            <h2 className="font-hero m-0 text-[clamp(46px,5.2vw,80px)] leading-none font-medium tracking-[-0.01em]">
              {titulo}
            </h2>

            <ul className="m-0 mt-12 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-9 gap-y-8 p-0">
              {datos.map((dato) => {
                const { href } = dato
                const valor = 'text-[clamp(17px,1.3vw,19px)] leading-[1.45] [overflow-wrap:anywhere]'
                return (
                  <li key={dato.etiqueta} className="flex items-start gap-4">
                    <span className="bg-primary-foreground/8 text-contacto-icono inline-flex size-[46px] flex-none items-center justify-center rounded-full">
                      <Icono nombre={dato.icono} className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-primary-foreground/62 m-0 text-[13px] font-medium tracking-[0.14em] uppercase">
                        {dato.etiqueta}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className={`${valor} hover:text-contacto-icono mt-1.5 block transition-colors duration-200`}
                          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {dato.valor}
                        </a>
                      ) : (
                        <p className={`${valor} m-0 mt-1.5`}>{dato.valor}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="bg-contacto-mapa text-primary-foreground/75 relative min-h-[340px] min-w-0 flex-[5_1_320px] overflow-hidden rounded-3xl">
            {mapa.direccion ? (
              <iframe
                title={mapa.titulo}
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapa.direccion)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
              />
            ) : (
              <div className="border-primary-foreground/15 absolute inset-4 flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed">
                <Icono nombre="pin" className="size-7" grosor={1.5} />
                <span className="text-sm font-medium">{mapa.pendiente}</span>
              </div>
            )}
          </div>
        </div>

        <footer className="border-primary-foreground/12 text-primary-foreground/60 mt-[clamp(64px,9vh,96px)] flex flex-wrap gap-x-7 gap-y-2.5 border-t pt-6 text-[15px]">
          {marcas.map((marca) => (
            <span key={marca}>{marca}</span>
          ))}
        </footer>
      </div>
    </section>
  )
}
