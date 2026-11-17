// Fuente: "KATHAROS - RESUMEN EJECUTIVO - TRATAMIENTO DE SHOCK & MANTENIMIENTO.pdf"
import { testimoniosPendientes, type Servicio } from './tipos'

export const katharos = {
  slug: 'katharos',
  marca: 'katharos',
  nombre: 'Katharos',
  logo: { src: '/img/katharos.png', width: 712, height: 148 },
  bloque: {
    titulo: 'Tratamiento biológico de grasas y olores',
    texto:
      'Digestor bioenzimático KB PLUS que degrada grasas, aceites y materia orgánica en cámaras y alcantarillado, reduce los malos olores y ayuda a prevenir atoros.',
  },
  pagina: {
    titulo: 'Cámaras sin grasas y sin malos olores',
    descripcion:
      'KB PLUS es un digestor bioenzimático que degrada grasas, aceites y materia orgánica en cámaras y redes sanitarias, y neutraliza los olores desde los primeros minutos.',
    metaDescripcion:
      'Katharos: tratamiento biológico con KB PLUS para degradar grasas, aceites y malos olores en cámaras y alcantarillado de edificios en Chile.',
    datos: [
      { valor: '5 enzimas', etiqueta: 'Más bacterias del género Bacillus' },
      { valor: 'pH 7,5–8,5', etiqueta: 'Cercano al neutro' },
      { valor: 'Biodegradable', etiqueta: 'Sin fosfatos ni solventes' },
    ],
  },
  comoFunciona: {
    titulo: 'Gestión biológica, preventiva y continua',
    intro:
      'A diferencia de los productos que desplazan los residuos hacia otros sectores de la red, KB PLUS actúa directamente sobre la materia orgánica.',
    pasos: [
      {
        titulo: 'Evaluación técnica',
        texto:
          'Revisamos las cámaras, su volumen, el nivel de grasas y la carga orgánica para definir dosis y frecuencia.',
      },
      {
        titulo: 'Tratamiento inicial (shock)',
        texto: 'Una aplicación intensiva degrada las acumulaciones de grasas y materia orgánica.',
      },
      {
        titulo: 'Mantenimiento mensual',
        texto: 'Aplicaciones periódicas mantienen la actividad biológica y controlan nuevas acumulaciones.',
      },
      {
        titulo: 'Seguimiento y ajuste',
        texto: 'Registramos olores, grasas, atoros y consumo de producto para ajustar el tratamiento.',
      },
    ],
  },
  beneficios: {
    titulo: 'Una mantención sanitaria más eficiente',
    intro: 'Pasamos del mantenimiento tradicional a una gestión biológica que se anticipa a los problemas.',
    items: [
      {
        icono: 'gota',
        titulo: 'Degrada grasas y aceites',
        texto: 'Favorece la degradación de la grasa, el aceite y la materia orgánica acumulada.',
      },
      {
        icono: 'hoja',
        titulo: 'Menos malos olores',
        texto: 'Su neutralizador de olores empieza a actuar desde los primeros minutos de aplicación.',
      },
      {
        icono: 'escudo',
        titulo: 'Previene atoros',
        texto: 'Ayuda a evitar obstrucciones, atoros y emergencias sanitarias recurrentes.',
      },
      {
        icono: 'flujo',
        titulo: 'No traslada el problema',
        texto: 'Actúa sobre la materia orgánica en vez de empujarla hacia otros sectores de la red.',
      },
      {
        icono: 'llave',
        titulo: 'Programa preventivo',
        texto: 'Un plan de mantenimiento preventivo y correctivo de base biológica, con seguimiento.',
      },
      {
        icono: 'edificio',
        titulo: 'Seguro para la instalación',
        texto: 'Compatible con cañerías metálicas, PVC y cemento en las condiciones de uso recomendadas.',
      },
    ],
  },
  caracteristicas: {
    titulo: 'Katharos Bio Plus (KB PLUS)',
    intro: 'Digestor bioenzimático líquido concentrado, desarrollado por Katharos.',
    productos: [
      {
        nombre: 'KB PLUS',
        descripcion:
          'Combina bacterias, enzimas especializadas y un neutralizador de olores para tratar grasas, aceites y materia orgánica.',
        specs: [
          { etiqueta: 'Tipo', valor: 'Digestor bioenzimático líquido concentrado' },
          { etiqueta: 'Bacterias', valor: 'No patógenas, del género Bacillus' },
          { etiqueta: 'Enzimas', valor: 'Proteasa, lipasa, amilasa, celulasa y mananasa' },
          { etiqueta: 'Control de olores', valor: 'Neutralizador de acción inmediata' },
          { etiqueta: 'pH', valor: '7,5–8,5' },
          { etiqueta: 'Composición', valor: 'Biodegradable, libre de fosfatos, nonilfenol y solventes' },
          { etiqueta: 'Compatibilidad', valor: 'Cañerías metálicas, PVC y cemento' },
        ],
      },
    ],
    aplicaciones: {
      titulo: 'Dónde se aplica',
      items: [
        { titulo: 'Cámaras generales de aguas grasas' },
        { titulo: 'Cámaras de aguas servidas' },
        { titulo: 'Cámaras desgrasadoras', texto: 'De locales comerciales y gastronómicos.' },
        { titulo: 'Redes de alcantarillado', texto: 'Y sectores con acumulación de materia orgánica.' },
      ],
    },
    nota: 'El tratamiento biológico complementa la inspección y la limpieza mecánica, pero no las reemplaza cuando son necesarias.',
  },
  testimonios: {
    titulo: 'Edificios sin malos olores',
    intro: 'La experiencia de administradores y comités que mantienen sus cámaras con Katharos.',
    items: testimoniosPendientes('Katharos'),
  },
  resultados: {
    titulo: 'Tratamientos en terreno',
    intro: 'Algunas de las cámaras y redes tratadas con KB PLUS.',
    // TODO: fotos reales de tratamientos (WebP, ~1200 px de ancho) en public/img/servicios/
    fotos: [
      { pie: 'Cámara de grasa antes del tratamiento' },
      { pie: 'Aplicación de KB PLUS en cámara desgrasadora' },
      { pie: 'Cámara tras el mantenimiento mensual' },
    ],
  },
} as const satisfies Servicio
