// Textos de la home, una constante por sección.
// El título, el texto, el logo y la URL de cada servicio viven en content/servicios/ (campo `bloque`).
// Los datos de contacto viven en content/contacto.ts.
import { type Marca } from '@/lib/marcas'

export const heroContent = {
  titulo: 'Soluciones para el agua y las redes sanitarias de su edificio',
  descripcion:
    'Tres líneas de servicio para administradores de edificios: prevención de sarro, limpieza de desagües y tratamiento biológico de grasas.',
  fotoAlt: 'Edificios de vidrio junto al agua, unidos por tres líneas de color',
  ctaPrincipal: { texto: 'Solicitar cotización', href: '#contacto' },
  ctaSecundario: { texto: 'Conocer los servicios', href: '#servicios' },
} as const

// Panel de tarjetas y secciones de cada servicio
export const serviciosHomeContent = {
  etiquetaPanel: 'Servicios',
  ctaTarjeta: 'Ver servicio',
  ctaDetalle: 'Ver detalles',
  fotoPendiente: 'Foto pendiente',
  // El problema que resuelve cada línea: título de su tarjeta y eyebrow de su sección
  problemas: {
    kio: 'Sarro e incrustaciones calcáreas',
    klean: 'Desagües y matrices sanitarias obstruidas',
    katharos: 'Grasas, aceites y olores en cámaras y alcantarillado',
  } satisfies Record<Marca, string>,
  // Orden de las tarjetas, de izquierda a derecha (el verde queda a la derecha)
  ordenTarjetas: ['kio', 'katharos', 'klean'] satisfies Marca[],
} as const
