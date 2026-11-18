// Sección Contacto de la home (cierre de la página).
// TODO: el cliente todavía no mandó sus datos. Los valores entre corchetes y las X son marcadores
// visibles (como en el diseño). Al completar cada dato, sumar su `href`:
//   teléfono → 'https://wa.me/569XXXXXXXX' o 'tel:+569XXXXXXXX' · correo → 'mailto:...'
//   redes → la URL completa del perfil · y `mapa.direccion` para mostrar el mapa de Google.
import { type NombreIcono } from '@/components/ui/Icono'

export type DatoContacto = {
  icono: NombreIcono
  etiqueta: string
  valor: string
  /** Sin href se muestra como texto (dato pendiente o no enlazable) */
  href?: string
}

const DATOS: readonly DatoContacto[] = [
  { icono: 'pin', etiqueta: 'Dirección', valor: '[Calle y número], [Comuna], [Ciudad]' },
  { icono: 'telefono', etiqueta: 'Teléfono / WhatsApp', valor: '+56 9 XXXX XXXX' },
  { icono: 'correo', etiqueta: 'Correo', valor: '[correo]@gmail.com' },
  { icono: 'reloj', etiqueta: 'Horario', valor: 'Lunes a viernes, [horario]' },
  { icono: 'facebook', etiqueta: 'Facebook', valor: 'facebook.com/[usuario]' },
  { icono: 'instagram', etiqueta: 'Instagram', valor: '@[usuario]' },
]

export const contactoContent = {
  titulo: 'Contáctenos',
  datos: DATOS,
  mapa: {
    /** Dirección para el mapa embebido de Google. Vacía: se muestra el recuadro pendiente */
    direccion: '' as string,
    titulo: 'Mapa de ubicación',
    pendiente: 'Mapa de ubicación pendiente',
  },
  // Barra inferior
  marcas: ['Kristalina', 'Kristalina Klean', 'Katharos'],
} as const
