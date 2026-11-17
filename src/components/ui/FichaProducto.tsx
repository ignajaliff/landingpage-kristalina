import { type Producto } from '@/content/servicios/tipos'

type FichaProductoProps = {
  producto: Producto
  etiqueta: string // "Ficha técnica"
  // Si es el único producto ocupa todo el ancho y reparte las specs en dos columnas
  anchoCompleto?: boolean
}

// Ficha técnica de un producto: cabecera con el color de la marca y lista de especificaciones
export function FichaProducto({ producto, etiqueta, anchoCompleto = false }: FichaProductoProps) {
  return (
    <article className="border-border bg-background h-full overflow-hidden rounded-[14px] border">
      <header className="bg-marca-brand text-primary-foreground px-[clamp(24px,3vw,36px)] py-6">
        <p className="text-primary-foreground/70 text-[12px] font-bold tracking-[0.14em] uppercase">{etiqueta}</p>
        <h3 className="font-display mt-1 text-[clamp(22px,2.2vw,28px)] font-bold tracking-[-0.01em]">
          {producto.nombre}
        </h3>
      </header>

      <div className="px-[clamp(24px,3vw,36px)] pt-6 pb-[clamp(20px,2.5vw,28px)]">
        <p className="text-foreground/75 text-[15px] leading-[1.6]">{producto.descripcion}</p>

        <dl className={`mt-4 grid ${anchoCompleto ? 'gap-x-10 min-[900px]:grid-cols-2' : ''}`}>
          {producto.specs.map((spec) => (
            <div
              key={spec.etiqueta}
              className="border-border flex flex-col gap-0.5 border-t py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <dt className="text-foreground/60 shrink-0 text-sm">{spec.etiqueta}</dt>
              <dd className="text-primary text-[15px] font-bold sm:text-right">{spec.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
