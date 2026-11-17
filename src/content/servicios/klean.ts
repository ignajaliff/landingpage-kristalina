// Fuente: "KRISTALINA KLEAN - RESUMEN EJECUTIVO - TRATAMIENTO DE SHOCK & MANTENIMIENTO.pdf"
import { testimoniosPendientes, type Servicio } from './tipos'

export const klean = {
  slug: 'kristalina-klean',
  marca: 'klean',
  nombre: 'Kristalina Klean',
  logo: { src: '/img/klean.png', width: 570, height: 210 },
  bloque: {
    titulo: 'Limpieza de desagües y matrices sanitarias',
    texto:
      'Tratamiento de shock con KLEAN OXY y KLEAN BIO que remueve incrustaciones, grasas y residuos orgánicos, y recupera la capacidad de evacuación de las redes de alcantarillado.',
  },
  pagina: {
    titulo: 'Desagües y matrices que vuelven a fluir',
    descripcion:
      'Un tratamiento químico y biológico que remueve incrustaciones, grasas y residuos orgánicos de las redes de alcantarillado y recupera su capacidad de evacuación.',
    metaDescripcion:
      'Kristalina Klean: tratamiento de shock y mantención de desagües y matrices sanitarias obstruidas con KLEAN OXY y KLEAN BIO, para edificios en Chile.',
    datos: [
      { valor: 'Shock + mantención', etiqueta: 'Correctivo y preventivo' },
      { valor: '211 mil millones', etiqueta: 'Bacterias por litro en KLEAN BIO' },
      { valor: 'Aplicación segura', etiqueta: 'Por personal especializado' },
    ],
  },
  comoFunciona: {
    titulo: 'Un tratamiento de shock en cuatro etapas',
    intro:
      'Una intervención química y biológica inicial, de carácter correctivo, seguida de un plan de mantenimiento preventivo.',
    pasos: [
      {
        titulo: 'Inspección y preparación',
        texto:
          'Evaluamos las instalaciones, identificamos los puntos críticos y coordinamos las medidas para trabajar de forma segura.',
      },
      {
        titulo: 'Aplicación del shock',
        texto:
          'Aplicamos KLEAN OXY en las redes verticales y KLEAN BIO en las horizontales, directo sobre las acumulaciones.',
      },
      {
        titulo: 'Reacción y enjuague',
        texto:
          'Respetamos los tiempos de reacción y hacemos un enjuague controlado para verificar la continuidad del flujo.',
      },
      {
        titulo: 'Verificación operacional',
        texto: 'Revisamos la evacuación de cada punto tratado y registramos las condiciones observadas.',
      },
    ],
  },
  beneficios: {
    titulo: 'Redes sanitarias que funcionan como deben',
    intro: 'Lo que busca lograr el tratamiento KLEAN OXY y KLEAN BIO en su edificio.',
    items: [
      {
        icono: 'flujo',
        titulo: 'Recupera el flujo',
        texto: 'Mejora la capacidad hidráulica de evacuación de los desagües intervenidos.',
      },
      {
        icono: 'gota',
        titulo: 'Remueve incrustaciones',
        texto: 'Elimina acumulaciones calcáreas y orgánicas adheridas al interior de las tuberías.',
      },
      {
        icono: 'llave',
        titulo: 'Interviene obstrucciones',
        texto: 'Actúa sobre obstrucciones parciales o totales de cabello, jabón, grasas y otros residuos.',
      },
      {
        icono: 'hoja',
        titulo: 'Menos malos olores',
        texto: 'Disminuye los olores causados por la acumulación de residuos en la red.',
      },
      {
        icono: 'edificio',
        titulo: 'Menos contingencias',
        texto: 'Reduce las emergencias sanitarias y la necesidad de intervenciones recurrentes.',
      },
      {
        icono: 'escudo',
        titulo: 'Aplicación segura',
        texto: 'Solo personal especializado, con elementos de protección y un procedimiento de seguridad específico.',
      },
    ],
  },
  caracteristicas: {
    titulo: 'Dos productos, una sola solución',
    intro: 'KLEAN OXY trabaja en la matriz vertical y KLEAN BIO en la horizontal.',
    productos: [
      {
        nombre: 'KLEAN OXY',
        descripcion:
          'Limpiador ácido de formulación especializada para remover incrustaciones calcáreas, óxidos, residuos de cemento y acumulaciones orgánicas.',
        specs: [
          { etiqueta: 'Tipo', valor: 'Limpiador ácido' },
          { etiqueta: 'Formulación', valor: 'Ácidos sulfúrico, clorhídrico y fosfórico' },
          { etiqueta: 'Se aplica en', valor: 'Matriz vertical' },
          { etiqueta: 'Actúa sobre', valor: 'Sarro, óxidos, cemento, cabello, jabón y grasas' },
        ],
      },
      {
        nombre: 'KLEAN BIO',
        descripcion:
          'Digestor bioenzimático líquido concentrado que acelera la degradación de la materia orgánica en las redes de desagüe.',
        specs: [
          { etiqueta: 'Tipo', valor: 'Digestor bioenzimático' },
          { etiqueta: 'Contenido', valor: '~211 mil millones de bacterias no patógenas por litro' },
          { etiqueta: 'Se aplica en', valor: 'Matriz horizontal' },
          { etiqueta: 'pH', valor: 'Neutro' },
          { etiqueta: 'Composición', valor: 'Biodegradable, libre de fosfatos' },
          { etiqueta: 'Compatibilidad', valor: 'No daña cañerías ni artefactos sanitarios' },
        ],
      },
    ],
    aplicaciones: {
      titulo: 'Dónde se aplica',
      items: [
        { titulo: 'Matrices verticales y horizontales de alcantarillado' },
        { titulo: 'Redes verticales de evacuación sanitaria' },
        { titulo: 'Descargas de lavamanos' },
        { titulo: 'Descargas de urinarios y WC', texto: 'Cuando la compatibilidad de materiales lo permite.' },
        { titulo: 'Sectores con incrustaciones y residuos orgánicos' },
        { titulo: 'Baños públicos y áreas de alto tránsito' },
      ],
    },
    nota: 'Las dosificaciones y los puntos de aplicación se definen después de una visita técnica a su edificio.',
  },
  testimonios: {
    titulo: 'Edificios que recuperaron sus redes',
    intro: 'La experiencia de administradores y comités que confiaron en Kristalina Klean.',
    items: testimoniosPendientes('Kristalina Klean'),
  },
  resultados: {
    titulo: 'Intervenciones realizadas',
    intro: 'Algunos de los tratamientos de shock aplicados en redes sanitarias de edificios.',
    // TODO: fotos reales de intervenciones (WebP, ~1200 px de ancho) en public/img/servicios/
    fotos: [
      { pie: 'Matriz vertical antes y después del tratamiento' },
      { pie: 'Aplicación de KLEAN OXY en red vertical' },
      { pie: 'Verificación del flujo tras el enjuague' },
    ],
    nota: 'Los resultados dependen del estado inicial de las instalaciones, la naturaleza de las obstrucciones y las condiciones de cada red.',
  },
} as const satisfies Servicio
