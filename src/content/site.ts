// Textos globales del sitio (metadata, 404, error). Editar acá, no en los componentes.

export const siteContent = {
  nombre: 'Grupo Kristalina',
  descripcion:
    'Soluciones para el agua y las redes sanitarias de edificios en Chile: prevención de sarro, limpieza de desagües y tratamiento biológico de grasas.',
} as const

export const notFoundContent = {
  codigo: '404',
  titulo: 'Esta página no existe',
  texto: 'El enlace que siguió puede estar roto o la página fue movida.',
  cta: 'Volver al inicio',
} as const

export const errorContent = {
  titulo: 'Algo no salió bien',
  texto: 'Tuvimos un problema al mostrar esta página. Intente de nuevo desde el inicio.',
  cta: 'Volver al inicio',
} as const
