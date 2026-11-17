import { type ReactNode } from 'react'
import { type Metadata } from 'next'
import { MotionProvider } from '@/components/ui/MotionProvider'
import { siteContent } from '@/content/site'
import { SITE_URL } from '@/lib/constants'
import { body, display } from './fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteContent.nombre,
    template: `%s · ${siteContent.nombre}`,
  },
  description: siteContent.descripcion,
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: siteContent.nombre,
    // TODO: agregar images con public/og.jpg (1200x630) cuando exista
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <MotionProvider>
          {/* Header y Footer se agregan acá cuando existan */}
          <main>{children}</main>
        </MotionProvider>
      </body>
    </html>
  )
}
