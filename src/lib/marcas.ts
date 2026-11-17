// Las tres líneas de servicio del grupo y sus clases de color.
// Clases escritas completas: Tailwind no detecta clases armadas con strings dinámicos.

export type Marca = 'kio' | 'klean' | 'katharos'

// `tema` define --marca-brand y --marca-accent para todo lo que está dentro: con eso los
// componentes usan clases genéricas (bg-marca-brand, text-marca-accent...) — ver globals.css.
export const ESTILOS_MARCA = {
  kio: {
    tema: 'tema-kio',
    bordeSuperior: 'border-t-kio-accent',
    bordeIzquierdo: 'border-l-kio-accent',
    texto: 'text-kio-brand',
    trazo: 'stroke-kio-accent',
    relleno: 'fill-kio-accent',
    alturaLogo: 'h-12',
    alturaLogoHero: 'h-[clamp(64px,9vw,112px)]',
  },
  klean: {
    tema: 'tema-klean',
    bordeSuperior: 'border-t-klean-accent',
    bordeIzquierdo: 'border-l-klean-accent',
    texto: 'text-klean-brand',
    trazo: 'stroke-klean-accent',
    relleno: 'fill-klean-accent',
    alturaLogo: 'h-[54px]',
    alturaLogoHero: 'h-[clamp(80px,11vw,136px)]',
  },
  katharos: {
    tema: 'tema-katharos',
    bordeSuperior: 'border-t-katharos-accent',
    bordeIzquierdo: 'border-l-katharos-accent',
    texto: 'text-katharos-brand',
    trazo: 'stroke-katharos-accent',
    relleno: 'fill-katharos-accent',
    alturaLogo: 'h-[38px]',
    alturaLogoHero: 'h-[clamp(44px,6vw,76px)]',
  },
} as const

export function esMarca(valor: string | undefined): valor is Marca {
  return valor !== undefined && valor in ESTILOS_MARCA
}
