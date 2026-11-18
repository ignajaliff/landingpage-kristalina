import { Comfortaa, Cormorant_Garamond, DM_Sans, Jost, Marcellus, Sora } from 'next/font/google'

// ── Todo el sitio (se aplican en layout.tsx) ──

// Display de las páginas de servicio: h1 (700) y títulos de tarjetas (600)
export const display = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

// Texto: variable con eje óptico (el handoff usa DM Sans opsz 9–40)
export const body = DM_Sans({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-body',
  display: 'swap',
})

// ── Solo la home (se aplican en page.tsx, así no se precargan en las demás páginas) ──

// H1 del hero y título de Contacto
const hero = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-hero',
  display: 'swap',
})

// Títulos de cada sección, inspirados en su logo y en peso fino
const tituloKio = Jost({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-titulo-kio',
  display: 'swap',
})

const tituloKlean = Comfortaa({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-titulo-klean',
  display: 'swap',
})

const tituloKatharos = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-titulo-katharos',
  display: 'swap',
})

export const fuentesHome = [hero, tituloKio, tituloKlean, tituloKatharos].map((fuente) => fuente.variable).join(' ')
