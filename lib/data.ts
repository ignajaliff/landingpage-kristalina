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
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Contactos', href: '#cta' },
];
export const navCta = { label: 'Contactar', href: '#cta' };
// Iconos que van dentro de la burbuja del header, al lado de los links.
export const navSocials = [
  { icon: 'instagram', href: '#', label: 'Instagram' },
  { icon: 'mail', href: 'mailto:kristalina@gmail.com', label: 'Email' },
] as { icon: IconName; href: string; label: string }[];

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
  eyebrow: 'Tecnología Kristalina',
  title: '¿Cómo funciona?',
  // Subtítulo único y resumido (antes eran 4 párrafos).
  subtitle:
    'El agua pasa por el dispositivo y se genera aragonita, que previene y desincrusta el sarro sin filtros ni químicos.',
};
export const steps: Step[] = [
  {
    icon: 'magnet',
    title: 'Disociación de fluidos',
    text: 'El agua atraviesa el equipo impulsada por una fuerza magneto-motriz y un paso venturi.',
  },
  {
    icon: 'flask',
    title: 'Se genera aragonita',
    text: 'Una forma del carbonato de alta solubilidad que ya no se adhiere a las paredes de la cañería.',
  },
  {
    icon: 'shield-check',
    title: 'Previene',
    text: 'La aragonita generada evita que se formen nuevas incrustaciones en toda la red de agua.',
  },
  {
    icon: 'waves',
    title: 'Desincrusta',
    text: 'Al contactar el sarro lo erosiona y remueve sin dañar la estructura: la forma inestable predomina sobre la estable.',
  },
];

/* ---- Ventajas y beneficios (agrupados por tema) ---- */
export interface BenefitGroup {
  icon: IconName;
  title: string;
  items: string[];
}
export const benefitsSection = {
  eyebrow: 'Por qué elegirlo',
  title: 'Ventajas y beneficios',
  subtitle:
    'Un solo equipo mejora la calidad del agua, cuida tus instalaciones y reduce tus costos.',
};
export const benefits: BenefitGroup[] = [
  {
    icon: 'piggy-bank',
    title: 'Ahorro y eficiencia',
    items: [
      'Menor consumo de detergentes y suavizantes.',
      'Ahorro de agua y gas gracias a procesos más eficientes.',
      'Alarga la vida útil de calefones, termotanques y calderas.',
    ],
  },
  {
    icon: 'shield-check',
    title: 'Cuida tus equipos',
    items: [
      'Evita el deterioro de griferías, fittings y artefactos.',
      'Previene incrustaciones en lavavajillas, lavadoras y hervidores.',
      'Menos fallas en todo lo que está en contacto con el agua.',
    ],
  },
  {
    icon: 'heart-pulse',
    title: 'Salud y bienestar',
    items: [
      'Agua ionizada y alcalinizada, ideal para beber y cocinar.',
      'Mejora las condiciones de la piel y el cabello.',
      'Menor uso de shampoo, bálsamos y cremas.',
    ],
  },
  {
    icon: 'droplets',
    title: 'Calidad del agua',
    items: [
      'Agua de alta calidad para la fabricación de hielo.',
      'Limpia las incrustaciones históricas de cañerías y redes.',
      'Desincrusta cañerías y partes obstruidas con sarro.',
      'Mejora el sabor y la transparencia del agua en toda la red.',
    ],
  },
];
export const featuresNote =
  'En algunos casos puede notarse una leve saturación en los aireadores de lavamanos, duchas o lavaplatos, producto de la desincrustación. Basta con retirarlo, limpiarlo y volver a colocarlo. Ocurre muy de vez en cuando.';

/* ---- About / Nosotros ---- */
export const about = {
  eyebrow: 'Video explicativo',
  title: 'Explicación del funcionamiento',
  text: 'Mirá en pocos minutos cómo el sistema Kristalina trata el agua, paso a paso.',
  // Pegá acá SOLO el ID del video de YouTube (lo que va después de "v=" o de "youtu.be/").
  // Ej: si el link es https://youtu.be/abc123XYZ  →  youtubeId: 'abc123XYZ'
  youtubeId: '7XWz7r9KII0',
};

/* ---- Características (intro + tarjetas de puntos clave) ---- */
export interface CharacteristicItem {
  icon: IconName;
  title: string;
  text: string;
}
export const characteristics = {
  eyebrow: 'Tecnología',
  title: 'Características',
  description:
    'Una tecnología que trata el agua de forma física, sin químicos ni filtros.',
  items: [
    {
      icon: 'flask',
      title: 'Genera aragonita',
      text: 'Al pasar el agua, el equipo produce aragonita de alta solubilidad que ya no se adhiere a las cañerías.',
    },
    {
      icon: 'shield-check',
      title: 'Previene y desincrusta',
      text: 'Evita nuevas incrustaciones y remueve el sarro ya formado en toda la red de agua.',
    },
    {
      icon: 'waves',
      title: 'Sin daño ni químicos',
      text: 'Erosiona el sarro sin dañar la estructura, a diferencia del deterioro que causa un químico.',
    },
    {
      icon: 'wallet',
      title: 'Menor costo',
      text: 'Se elige según el caudal y no según el diámetro de la tubería; ideal para recirculación.',
    },
  ] as CharacteristicItem[],
};

/* ---- Gallery / Galería ---- */
export interface GalleryItem {
  src: string;
  alt: string;
}
export const gallerySection = {
  eyebrow: 'Resultados',
  title: 'Instalación de dispositivos',
  subtitle:
    'Algunos de nuestros trabajos de instalación en edificios y comunidades.',
};
// 3 fotos. Por ahora placeholders (cuadros de color).
// Para cargar las reales: poné las imágenes en public/fotos/ y reemplazá src por '/fotos/tu-imagen.jpg'
export const galleryItems: GalleryItem[] = [
  { src: '/fotos/tr1.jpg', alt: 'Instalación del dispositivo 1' },
  { src: '/fotos/tr2.jpg', alt: 'Instalación del dispositivo 2' },
  { src: '/fotos/tr3.jpg', alt: 'Instalación del dispositivo 3' },
  { src: '/fotos/tr4.jpeg', alt: 'Instalación del dispositivo 4' },
  { src: '/fotos/tr5.jpeg', alt: 'Instalación del dispositivo 5' },
  { src: '/fotos/tr6.jpeg', alt: 'Instalación del dispositivo 6' },
  { src: '/fotos/tr7.jpeg', alt: 'Instalación del dispositivo 7' },
];

/* ---- Clientes / Testimonios (edificios + administradora) ---- */
export interface Client {
  building: string; // nombre del edificio
  admin: string; // empresa administradora
}
export const clientsSection = {
  eyebrow: 'Testimonios',
  title: 'Confían en nosotros',
  subtitle:
    'Edificios y comunidades que ya tienen el servicio Kristalina con contrato anual.',
};
// Placeholders: reemplazá por los edificios reales (nombre + administradora).
export const clients: Client[] = [
  { building: 'Edificio Aurora', admin: 'Adm. Costanera' },
  { building: 'Edificio Pacífico', admin: 'Adm. del Sur' },
  { building: 'Torre Mar', admin: 'Adm. Norte' },
  { building: 'Edificio Los Robles', admin: 'Adm. Central' },
  { building: 'Edificio Bellavista', admin: 'Adm. Andina' },
  { building: 'Torre Mirador', admin: 'Adm. del Valle' },
  { building: 'Edificio Las Lomas', admin: 'Adm. Costanera' },
  { building: 'Edificio Parque', admin: 'Adm. Litoral' },
  { building: 'Torre Sol', admin: 'Adm. del Sur' },
  { building: 'Edificio Vista Hermosa', admin: 'Adm. Cordillera' },
  { building: 'Edificio Plaza', admin: 'Adm. Central' },
  { building: 'Torre Las Condes', admin: 'Adm. Oriente' },
];

/* ---- Contacto (datos + formulario) ---- */
// Reemplazá estos datos por los reales de la empresa.
export const contact = {
  eyebrow: 'Contacto',
  title: 'Contáctenos',
  subtitle:
    'Escribinos y te asesoramos sobre el equipo ideal para tu edificio, hogar o industria.',
  phone: '+56 9 1234 5678',
  email: 'kristalina@gmail.com',
  address: 'Av. Ejemplo 1234, Santiago',
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
        { label: 'Santiago, Chile', href: '#' },
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
