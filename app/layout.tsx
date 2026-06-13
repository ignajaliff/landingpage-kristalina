import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';

// Fuentes del proyecto. OJO (bug clásico): la variable de next/font (--font-display)
// y el token de CSS (--display) deben ser DISTINTOS, si no se rompe todo a serif.
const display = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kristalina — Landing',
  description: 'Landing page hecha con Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body data-theme="light">{children}</body>
    </html>
  );
}
