// Las tres líneas de servicio del grupo y sus clases de color.
// Clases escritas completas: Tailwind no detecta clases armadas con strings dinámicos.

export type Marca = 'kio' | 'klean' | 'katharos'

// Orden de las líneas de la home: 0 Kristalina, 1 Klean, 2 Katharos
export const MARCAS: readonly Marca[] = ['kio', 'klean', 'katharos']

// `tema` define --marca-brand, --marca-linea, --marca-fondo... para todo lo que está dentro: con eso
// los componentes usan clases genéricas (bg-marca-brand, text-marca-titulo...) — ver globals.css.
export const ESTILOS_MARCA = {
  kio: {
    tema: 'tema-kio',
    alturaLogoHero: 'h-[clamp(64px,9vw,112px)]',
    // Home
    bordeTarjeta: 'border-t-kio-accent',
    trazo: 'stroke-kio-accent',
    colorLinea: 'var(--kio-accent)',
    titulo:
      'font-titulo-kio text-[clamp(32px,3.6vw,54px)] leading-[1.06] font-light tracking-[-0.01em]',
  },
  klean: {
    tema: 'tema-klean',
    alturaLogoHero: 'h-[clamp(80px,11vw,136px)]',
    bordeTarjeta: 'border-t-klean-accent',
    trazo: 'stroke-klean-accent',
    colorLinea: 'var(--klean-accent)',
    titulo:
      'font-titulo-klean text-[clamp(29px,3.1vw,46px)] leading-[1.16] font-normal tracking-[-0.02em]',
  },
  katharos: {
    tema: 'tema-katharos',
    alturaLogoHero: 'h-[clamp(44px,6vw,76px)]',
    bordeTarjeta: 'border-t-katharos-linea',
    trazo: 'stroke-katharos-linea',
    colorLinea: 'var(--katharos-linea)',
    titulo:
      'font-titulo-katharos text-[clamp(32px,3.6vw,54px)] leading-[1.1] font-normal tracking-[0.005em]',
  },
} as const
