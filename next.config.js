/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // sitio 100% estático → carpeta out/
  images: { unoptimized: true }, // usamos <img> normales, no next/image
  trailingSlash: true,           // rutas como carpetas con index.html
};
module.exports = nextConfig;
