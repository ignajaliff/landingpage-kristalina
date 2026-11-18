// Las tres líneas de servicio: única fuente de datos para la home y para cada página /[servicio].
// El contenido de cada una vive en su archivo (kio.ts, klean.ts, katharos.ts), tomado de los PDF del cliente.
import { katharos } from './katharos'
import { kio } from './kio'
import { klean } from './klean'
import { type Marca } from '@/lib/marcas'
import { type Servicio } from './tipos'

export const SERVICIOS: readonly Servicio[] = [kio, klean, katharos]

export type ServicioData = Servicio

export function getServicio(slug: string): ServicioData | undefined {
  return SERVICIOS.find((servicio) => servicio.slug === slug)
}

// Cada marca tiene exactamente un servicio: si falta, es un error de contenido y debe fallar el build
export function getServicioPorMarca(marca: Marca): ServicioData {
  const servicio = SERVICIOS.find((s) => s.marca === marca)
  if (!servicio) throw new Error(`Falta el servicio de la marca "${marca}" en content/servicios`)
  return servicio
}

// Textos fijos de las páginas de servicio
export const paginaServicioContent = {
  eyebrow: 'Línea de servicio · Grupo Kristalina',
  volver: 'Volver a servicios',
  volverHref: '/#servicios',
  // Llevan a la sección Contacto de la home (cuando haya WhatsApp, "Hablar con un asesor" puede ir directo ahí)
  ctaPrincipal: { texto: 'Solicitar cotización', href: '/#contacto' },
  ctaSecundario: { texto: 'Hablar con un asesor', href: '/#contacto' },
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
