// Fuente: "KRISTALINA - RESUMEN EJECUTIVO & FICHAS TECNICAS.pdf" (raíz del proyecto)
import { testimoniosPendientes, type Servicio } from './tipos'

export const kio = {
  slug: 'kristalina-ki-o',
  marca: 'kio',
  nombre: 'Kristalina KI-O',
  logo: { src: '/img/kristalina.png', width: 909, height: 274 },
  bloque: {
    titulo: 'Sistema central para eliminar el sarro',
    texto:
      'Ionizador magnético que previene y reduce las incrustaciones calcáreas en cañerías, bombas, válvulas e intercambiadores de calor, sin productos químicos agresivos.',
  },
  pagina: {
    titulo: 'Control del sarro en toda la red de agua, sin químicos',
    descripcion:
      'El ionizador magnético KI-O se instala en la cañería y cambia el comportamiento de los minerales del agua, para que el sarro deje de adherirse a cañerías y equipos del edificio.',
    metaDescripcion:
      'Kristalina KI-O: ionizador magnético para prevenir y reducir el sarro e incrustaciones calcáreas en cañerías y equipos de edificios en Chile, sin químicos.',
    datos: [
      { valor: 'Sin químicos', etiqueta: 'Tratamiento físico del agua' },
      { valor: 'AISI 304', etiqueta: 'Acero inoxidable' },
      { valor: 'Hasta 11.500 l/h', etiqueta: 'Caudal por equipo' },
    ],
  },
  comoFunciona: {
    titulo: 'Fuerza magnética y efecto Venturi',
    intro:
      'KI-O combina una fuerza magnetomotriz con un principio hidrodinámico Venturi para modificar el comportamiento de los minerales del agua, en especial los carbonatos de calcio.',
    pasos: [
      {
        titulo: 'El agua atraviesa el equipo',
        texto: 'Al pasar por el ionizador, instalado en la cañería, el agua cambia sus condiciones hidrodinámicas.',
      },
      {
        titulo: 'Se forma aragonita',
        texto:
          'El carbonato de calcio tiende a cristalizar como aragonita, una forma que se comporta distinto a la calcita, la que forma el sarro duro.',
      },
      {
        titulo: 'Se previene el sarro nuevo',
        texto: 'Los carbonatos se adhieren menos a cañerías, intercambiadores, bombas y válvulas.',
      },
      {
        titulo: 'Se reduce el sarro existente',
        texto:
          'En condiciones adecuadas de operación, los depósitos calcáreos se movilizan y reducen de forma progresiva.',
      },
    ],
  },
  beneficios: {
    titulo: 'Menos sarro, menos mantención',
    intro: 'Protegemos, conservamos y extendemos la vida útil de la infraestructura de su edificio.',
    items: [
      {
        icono: 'escudo',
        titulo: 'Protege los activos críticos',
        texto: 'Cuida cañerías, bombas, válvulas, intercambiadores de calor y circuitos térmicos.',
      },
      {
        icono: 'llave',
        titulo: 'Menos intervenciones',
        texto: 'Reduce las mantenciones y reparaciones causadas por las incrustaciones.',
      },
      {
        icono: 'flujo',
        titulo: 'Eficiencia hidráulica',
        texto: 'Con menos incrustaciones, el agua circula con normalidad por toda la red.',
      },
      {
        icono: 'hoja',
        titulo: 'Sin químicos agresivos',
        texto: 'Trata el agua sin productos que dañen los materiales o componentes de la instalación.',
      },
      {
        icono: 'ajuste',
        titulo: 'Dimensionamiento flexible',
        texto:
          'El equipo se elige según el caudal requerido y no solo por el diámetro de la tubería, lo que optimiza los costos.',
      },
      {
        icono: 'edificio',
        titulo: 'Cuida su capital inmobiliario',
        texto: 'Contribuye a la excelencia operacional y a conservar el valor del edificio.',
      },
    ],
  },
  caracteristicas: {
    titulo: 'Ionizador magnético KI-O',
    intro: 'Dos modelos en acero inoxidable. Se selecciona según el caudal y las condiciones de operación.',
    productos: [
      {
        nombre: 'KI-O 1″',
        descripcion: 'Para caudales de hasta 4.500 litros por hora.',
        specs: [
          { etiqueta: 'Diámetro nominal', valor: '1 pulgada' },
          { etiqueta: 'Cuerpo exterior', valor: 'Acero inoxidable AISI 304' },
          { etiqueta: 'Cuerpo interior', valor: 'Acero inoxidable AISI 304' },
          { etiqueta: 'Longitud / diámetro', valor: '146 mm / 67 mm' },
          { etiqueta: 'Caudal', valor: '4.500 l/h' },
          { etiqueta: 'Conexión', valor: 'Rosca macho / macho' },
        ],
      },
      {
        nombre: 'KI-O 2″',
        descripcion: 'Para caudales de hasta 11.500 litros por hora.',
        specs: [
          { etiqueta: 'Diámetro nominal', valor: '2 pulgadas' },
          { etiqueta: 'Cuerpo exterior', valor: 'Acero inoxidable AISI 304' },
          { etiqueta: 'Cuerpo interior', valor: 'Acero inoxidable AISI 304' },
          { etiqueta: 'Longitud / diámetro', valor: '190 mm / 106 mm' },
          { etiqueta: 'Caudal', valor: '11.500 l/h' },
          { etiqueta: 'Conexión', valor: 'Rosca macho / macho' },
        ],
      },
    ],
    imagen: {
      src: '/img/servicios/kio-ionizador.jpg',
      width: 1202,
      height: 664,
      alt: 'Ionizador magnético KI-O de acero inoxidable',
      pie: 'Foto referencial',
    },
    aplicaciones: {
      titulo: 'Dónde se instala',
      items: [
        { titulo: 'Matriz principal de agua', texto: 'Tratamiento del caudal de alimentación general.' },
        { titulo: 'Sistemas de recirculación', texto: 'Tratamiento continuo del agua acumulada en estanques.' },
        { titulo: 'Torres de enfriamiento', texto: 'Bateas inferiores y circuitos de recirculación.' },
        { titulo: 'Circuitos térmicos', texto: 'Protección de intercambiadores y componentes expuestos.' },
      ],
    },
  },
  testimonios: {
    titulo: 'Edificios que ya trabajan con KI-O',
    intro: 'La experiencia de administradores y comités que protegen su red de agua con Kristalina.',
    items: testimoniosPendientes('Kristalina KI-O'),
  },
  resultados: {
    titulo: 'Equipos instalados',
    intro: 'Algunas de las instalaciones de ionizadores KI-O realizadas en edificios.',
    // TODO: fotos reales de instalaciones (WebP, ~1200 px de ancho) en public/img/servicios/
    fotos: [
      { pie: 'Ionizador KI-O en la matriz principal de agua' },
      { pie: 'Equipo instalado en un sistema de recirculación' },
      { pie: 'Instalación en sala de bombas' },
    ],
  },
} as const satisfies Servicio
