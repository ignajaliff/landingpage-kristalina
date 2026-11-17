// Las tres líneas de servicio: única fuente de datos para la home y para cada página /[servicio].
// El contenido de cada una vive en su archivo (kio.ts, klean.ts, katharos.ts), tomado de los PDF del cliente.
import { katharos } from './katharos'
import { kio } from './kio'
import { klean } from './klean'
import { type Servicio } from './tipos'

export const SERVICIOS: readonly Servicio[] = [kio, klean, katharos]

export type ServicioData = Servicio

export function getServicio(slug: string): ServicioData | undefined {
  return SERVICIOS.find((servicio) => servicio.slug === slug)
}

// Textos fijos de las páginas de servicio
export const paginaServicioContent = {
  eyebrow: 'Línea de servicio · Grupo Kristalina',
  volver: 'Volver a servicios',
  volverHref: '/#servicios',
  // TODO: #cotizar → formulario de cotización
  ctaPrincipal: { texto: 'Solicitar cotización', href: '/#cotizar' },
  ctaSecundario: { texto: 'Hablar con un asesor', href: '/#cotizar' },
  // Eyebrow de cada sección (el título y la intro cambian por servicio)
  secciones: {
    comoFunciona: 'Cómo funciona',
    beneficios: 'Ventajas y beneficios',
    caracteristicas: 'Características de la tecnología',
    testimonios: 'Testimonios',
    resultados: 'Resultados',
  },
  fichaTecnica: 'Ficha técnica',
  testimonioPendiente: 'Testimonio pendiente',
  fotoPendiente: 'Foto pendiente',
} as const
