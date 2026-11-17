// Textos de la home, una constante por sección.
// Los datos de cada servicio (logo, títulos, textos) viven en content/servicios.ts.
import { type Marca } from '@/lib/marcas'

type TarjetaServicio = {
  marca: Marca
  titulo: string
  href: string
}

export const heroContent = {
  eyebrow: 'Grupo Kristalina · Chile',
  titulo: 'Soluciones para el agua y las redes sanitarias de su edificio',
  descripcion:
    'Tres líneas de servicio para administradores de edificios: prevención de sarro, limpieza de desagües y tratamiento biológico de grasas.',
  // TODO: #cotizar → formulario de cotización
  ctaPrincipal: { texto: 'Solicitar cotización', href: '/#cotizar' },
  ctaSecundario: { texto: 'Conocer los servicios', href: '/#servicios' },
  ctaTarjeta: 'Ver servicio',
  // Cada tarjeta baja con una línea de su color hasta su bloque en la sección Servicios
  tarjetas: [
    { marca: 'kio', titulo: 'Sarro e incrustaciones calcáreas', href: '/#kristalina-ki-o' },
    { marca: 'klean', titulo: 'Desagües y matrices sanitarias obstruidas', href: '/#kristalina-klean' },
    { marca: 'katharos', titulo: 'Grasas, aceites y olores en cámaras y alcantarillado', href: '/#katharos' },
  ] satisfies TarjetaServicio[],
} as const

export const serviciosContent = {
  ctaDetalle: 'Ver detalles',
} as const
