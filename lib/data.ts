/* ============================================================
   CONTENIDO DE LA LANDING
   Todo el texto vive acá. Para cambiar algo, editás este archivo.
   Los componentes solo "dibujan" estos datos.
   ============================================================ */

import type { IconName } from '@/components/Icon';

/* ---- Marca / identidad ---- */
export const brand = {
  name: 'Kristalina',
  // Si más adelante hay logo en imagen: logo: '/logos/kristalina.png',
};

/* ---- Navegación (header) ---- */
export interface NavLink {
  label: string;
  href: string;
}
export const navLinks: NavLink[] = [
  { label: '¿Cómo funciona?', href: '#about' },
  { label: 'Características', href: '#features' },
  { label: 'Beneficios', href: '#gallery' },
  { label: 'Modelos', href: '#testimonials' },
  { label: 'Contactos', href: '#cta' },
];
export const navCta = { label: 'Contactar', href: '#cta' };

/* ---- Hero ---- */
export interface HeroHighlight {
  icon: IconName;
  title: string;
  text: string;
}
export const hero = {
  eyebrow: 'Tecnología antisarro',
  title: '¡Dispositivo Eliminador de Sarro!',
  subtitle:
    'Elimina el molesto sarro blanco de las tuberías de tu hogar, oficina, edificio o industria.',
  image: { src: '/imagen-tuberia.png', alt: 'Tubería con agua limpia eliminando el sarro' },
  highlights: [
    {
      icon: 'shield',
      title: '100% sin químicos',
      text: 'Tratamiento ecológico, sin sal ni mantenimiento.',
    },
    {
      icon: 'zap',
      title: 'Instalación en minutos',
      text: 'Se coloca sin obras ni cortar la cañería.',
    },
    {
      icon: 'sparkles',
      title: 'Cuida tus tuberías',
      text: 'Protege grifería, calefón y electrodomésticos.',
    },
  ] as HeroHighlight[],
  contactCta: { label: 'Quiero el mío', href: '#cta' },
};

/* ---- ¿Cómo funciona? (texto + pasos del proceso) ---- */
export interface Step {
  icon: IconName;
  title: string;
  text: string;
}
export const featuresSection = {
  eyebrow: 'El funcionamiento',
  title: '¿Cómo funciona?',
  paragraphs: [
    'Los sistemas funcionan como disociadores de fluidos, a través de una fuerza magneto motriz y un paso venturi.',
    'Al pasar por el dispositivo se genera aragonita cuya principal característica es su alta solubilidad.',
    'Esta aplicación tiene dos efectos fundamentales: el prevenir y desincrustar.',
    'No se necesitan filtros y tiene beneficios para la salud.',
  ],
};
export const steps: Step[] = [
  {
    icon: 'zap',
    title: 'Disociación de fluidos',
    text: 'El agua atraviesa el dispositivo impulsada por una fuerza magneto-motriz y un paso venturi.',
  },
  {
    icon: 'sparkles',
    title: 'Se genera aragonita',
    text: 'Una forma del carbonato de alta solubilidad que ya no se adhiere a las paredes de la tubería.',
  },
  {
    icon: 'shield',
    title: 'Previene y desincrusta',
    text: 'Evita nuevas incrustaciones y disuelve el sarro que ya estaba acumulado en la cañería.',
  },
  {
    icon: 'heart',
    title: 'Sin filtros, más sano',
    text: 'No necesita filtros ni mantenimiento, y aporta beneficios para la salud.',
  },
];

/* ---- About / Nosotros ---- */
export const about = {
  eyebrow: 'Sobre nosotros',
  title: 'Una historia que conecta con tu cliente',
  text: 'Contá brevemente quién sos, cómo empezaste y qué te apasiona. La gente compra a personas, no a empresas anónimas.',
  bullets: [
    'Un punto que demuestre experiencia o trayectoria.',
    'Otro que hable de calidad o atención personalizada.',
    'Un tercero sobre compromiso o resultados.',
  ],
  cta: { label: 'Conocenos más', href: '#cta' },
};

/* ---- Gallery / Galería ---- */
export interface GalleryItem {
  src: string;
  alt: string;
}
export const gallerySection = {
  eyebrow: 'Galería',
  title: 'Algunos de nuestros trabajos',
  subtitle: 'Mostrá fotos de tus productos, proyectos o el local.',
};
// Por ahora placeholders (cuadros de color). Reemplazá src por /fotos/tu-imagen.jpg
export const galleryItems: GalleryItem[] = [
  { src: '', alt: 'Trabajo 1' },
  { src: '', alt: 'Trabajo 2' },
  { src: '', alt: 'Trabajo 3' },
  { src: '', alt: 'Trabajo 4' },
  { src: '', alt: 'Trabajo 5' },
  { src: '', alt: 'Trabajo 6' },
];

/* ---- Testimonials / Opiniones ---- */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number; // 1 a 5
}
export const testimonialsSection = {
  eyebrow: 'Opiniones',
  title: 'Lo que dicen nuestros clientes',
  subtitle: 'La prueba social genera confianza. Sumá opiniones reales.',
};
export const testimonials: Testimonial[] = [
  {
    quote:
      'Una experiencia excelente de principio a fin. Súper recomendable, volvería sin dudarlo.',
    author: 'Nombre Apellido',
    role: 'Cliente',
    rating: 5,
  },
  {
    quote:
      'Atención impecable y resultados que superaron mis expectativas. Muchas gracias.',
    author: 'Nombre Apellido',
    role: 'Cliente',
    rating: 5,
  },
  {
    quote:
      'Profesionales de verdad. Cumplieron con todo lo prometido y en tiempo.',
    author: 'Nombre Apellido',
    role: 'Cliente',
    rating: 5,
  },
];

/* ---- CTA final ---- */
export const cta = {
  title: '¿Listo para empezar?',
  subtitle:
    'Un último empujón para que el visitante haga clic. Repetí tu propuesta de valor y dale un botón claro.',
  button: { label: 'Contactanos', href: 'mailto:hola@kristalina.com' },
};

/* ---- Footer ---- */
export interface FooterColumn {
  title: string;
  links: NavLink[];
}
export interface SocialLink {
  icon: IconName;
  href: string;
  label: string;
}
export const footer = {
  tagline: 'Una frase corta que resuma tu marca o lo que ofrecés.',
  columns: [
    {
      title: 'Navegación',
      links: [
        { label: 'Servicios', href: '#features' },
        { label: 'Nosotros', href: '#about' },
        { label: 'Galería', href: '#gallery' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: 'hola@kristalina.com', href: 'mailto:hola@kristalina.com' },
        { label: '+54 11 1234 5678', href: 'tel:+541112345678' },
        { label: 'Buenos Aires, Argentina', href: '#' },
      ],
    },
  ] as FooterColumn[],
  socials: [
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
  ] as SocialLink[],
  copyright: `© ${'2026'} Kristalina. Todos los derechos reservados.`,
};
