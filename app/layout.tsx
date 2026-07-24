import type { Metadata } from 'next';
import { Playfair_Display, Inter, Poppins } from 'next/font/google';
import './globals.css';

// Fuentes del proyecto. OJO (bug clásico): la variable de next/font (--font-display)
// y el token de CSS (--display) deben ser DISTINTOS, si no se rompe todo a serif.
// Display = Playfair Display: serif de alto contraste, look luxury/elegante.
const display = Playfair_Display({
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
// Poppins: usada en el Hero (moderna, geométrica).
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kristalina — Landing',
  description: 'Landing page hecha con Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${poppins.variable}`}
    >
      <head>
        {/* Si la pantalla de carga ya se vio en esta sesión, se marca ANTES
            del primer pixel para que el CSS la oculte sin parpadeo. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('kristalina-splash')){document.documentElement.classList.add('splash-seen')}}catch(e){}`,
          }}
        />
      </head>
      <body data-theme="light">{children}</body>
    </html>
  );
}
