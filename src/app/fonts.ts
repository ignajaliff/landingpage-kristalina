import { DM_Sans, Sora } from 'next/font/google'

// Display: h1 (700) y títulos de tarjetas (600)
export const display = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

// Texto: eyebrow, párrafos, botones, textos de tarjetas
export const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
})
