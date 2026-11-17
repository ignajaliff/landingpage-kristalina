import { type NextConfig } from 'next'

// Export estático: `npm run build` genera la carpeta `out/` con HTML/CSS/JS puros,
// lista para subir a public_html en hostings compartidos (Hostinger, SiteGround, etc.).
const nextConfig: NextConfig = {
  output: 'export',
  // /servicios → /servicios/index.html: lo resuelve cualquier Apache/LiteSpeed sin reglas extra
  trailingSlash: true,
  // Sin servidor Node no hay optimizador de imágenes: subirlas ya optimizadas (WebP/AVIF)
  images: { unoptimized: true },
  // Solo afecta a `npm run dev`: Next bloquea su JavaScript de desarrollo si la página no se abre
  // desde localhost. Esto permite abrirla también como http://127.0.0.1:3000
  allowedDevOrigins: ['127.0.0.1'],
}

export default nextConfig
