import { type NombreIcono } from '@/components/ui/Icono'
import { type Marca } from '@/lib/marcas'

export type Imagen = { src: string; width: number; height: number; alt: string }

type ItemTexto = { titulo: string; texto?: string }

// Encabezado común de cada sección: el eyebrow es fijo (paginaServicioContent), esto cambia por servicio
type Encabezado = { titulo: string; intro: string }

export type Producto = {
  nombre: string
  descripcion: string
  specs: readonly { etiqueta: string; valor: string }[]
}

export type Testimonio = { cita: string; autor: string; cargo: string; pendiente?: boolean }

// Sin `imagen` se muestra un recuadro de "foto pendiente"
export type FotoResultado = { pie: string; imagen?: Imagen }

export type Servicio = {
  slug: string // URL de su página: /[slug]/ (también es el ancla de su bloque en la home)
  marca: Marca
  nombre: string
  logo: { src: string; width: number; height: number }
  // Bloque de la sección Servicios de la home
  bloque: { titulo: string; texto: string }
  // Hero de su página propia: datos = cifras o rasgos clave que se muestran bajo los botones
  pagina: {
    titulo: string
    descripcion: string
    metaDescripcion: string
    datos: readonly { valor: string; etiqueta: string }[]
  }
  comoFunciona: Encabezado & { pasos: readonly Required<ItemTexto>[] }
  beneficios: Encabezado & { items: readonly (Required<ItemTexto> & { icono: NombreIcono })[] }
  caracteristicas: Encabezado & {
    productos: readonly Producto[]
    imagen?: Imagen & { pie: string }
    aplicaciones: { titulo: string; items: readonly ItemTexto[] }
    nota?: string
  }
  testimonios: Encabezado & { items: readonly Testimonio[] }
  resultados: Encabezado & { fotos: readonly FotoResultado[]; nota?: string }
}

// TODO: reemplazar por testimonios reales (con autorización del cliente) antes de publicar
export function testimoniosPendientes(servicio: string): Testimonio[] {
  return [1, 2, 3].map(() => ({
    cita: `Espacio para el testimonio de un administrador o comité que haya trabajado con ${servicio}.`,
    autor: 'Nombre del cliente',
    cargo: 'Cargo · Edificio',
    pendiente: true,
  }))
}
