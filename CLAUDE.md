# CLAUDE.md — Guía para construir una landing moderna con Next.js

> **Qué es este archivo:** una guía de arquitectura + convenciones + errores conocidos
> para construir páginas web modernas (one-pager / landing) con Next.js, exportadas como
> sitio **100% estático** y deployadas en **Hostinger** (subiendo `out/`) o **CapRover** (Docker + nginx).
>
> **Cómo usarlo en un proyecto nuevo:**
> 1. Copiá este `CLAUDE.md` a la raíz de una carpeta vacía.
> 2. Abrí Claude Code en esa carpeta (carga `CLAUDE.md` solo).
> 3. Decí: **"Quiero que empieces a desarrollar la estructura de una página web hecha con
>    Next.js usando todo lo que dice CLAUDE.md."**
> 4. Después pasás el diseño/contenido y se completa sobre esta base.
>
> El objetivo es que **todos los proyectos compartan la misma arquitectura, estructura y
> sistema de diseño**, y que se eviten los errores listados al final.

---

## 0. Instrucciones para Claude (al iniciar un proyecto)

Cuando el usuario pida "armá la estructura según CLAUDE.md", hacé **en este orden**:

1. Crear los archivos de configuración (sección 2) **exactamente** como están acá.
2. `npm install` y, si Next avisa de un CVE, bumpear a la última patch de la misma línea
   (ej. `npm install next@^14.2.x`). No saltar a una major sin avisar.
3. Crear `app/layout.tsx` con las fuentes (sección 3) — **cuidado con el bug de la variable circular**.
4. Crear `app/globals.css` con los **design tokens** y el esqueleto del sistema (sección 4).
   Usar una **paleta placeholder** si todavía no hay diseño.
5. Crear la estructura de carpetas (sección 5): `lib/data.ts`, hooks, `components/sections/`.
6. Crear un hero mínimo + Nav + Footer de ejemplo, **todo el texto desde `lib/data.ts`**.
7. Crear los archivos de deploy (sección 9): `Dockerfile`, `nginx.conf`, `captain-definition`, `.dockerignore`.
8. Dejar todo **compilando con `npm run build`** y generando la carpeta `out/`.
9. Verificar visualmente con un screenshot del `out/` servido (sección 10), no solo "compila".

Reglas que NO se rompen:
- **Contenido siempre separado del diseño** (todo en `lib/data.ts`, tipado).
- **Nunca hardcodear** colores/medidas en componentes: siempre variables CSS.
- **Componentes interactivos** llevan `"use client"`.
- Antes de pushear a deploy, **build verde** sí o sí.

---

## 1. Stack

| Capa | Elección | Por qué |
|---|---|---|
| Framework | **Next.js 14, App Router, TypeScript** | SSR-friendly, export estático, convenciones claras |
| Estilos | **CSS global con design tokens** (variables CSS en `globals.css`) | Un solo lugar de verdad; Tailwind queda para utilidades puntuales |
| Animación | CSS + un hook `useScrollReveal` (IntersectionObserver). Framer Motion **solo** si hace falta algo complejo | Liviano, sin dependencias innecesarias |
| Íconos | SVG inline en un componente `Icon` (equivalentes a Lucide) o `lucide-react` | Control total, sin assets extra |
| Hosting | **Export estático** (`output: 'export'`) → Hostinger (sube `out/`) o CapRover (Docker+nginx) | Barato, rápido, sin server |

---

## 2. Configuración (copiar tal cual)

### `next.config.js`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // sitio 100% estático → carpeta out/
  images: { unoptimized: true }, // usamos <img> normales, no next/image
  trailingSlash: true,       // rutas como carpetas con index.html
};
module.exports = nextConfig;
```

### `tsconfig.json` (lo importante)
```json
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "paths": { "@/*": ["./*"] }
  }
}
```

### `package.json` (deps base)
```
next ^14.2.x · react ^18.3 · react-dom ^18.3 · lucide-react · (framer-motion solo si hace falta)
dev: typescript · @types/node · @types/react · @types/react-dom · tailwindcss · postcss · autoprefixer
```

### Tailwind + PostCSS
- `tailwind.config.ts`: `content` apuntando a `app/`, `components/`, `lib/`. Sin plugins.
- `postcss.config.js`: `tailwindcss` + `autoprefixer`.
- En `globals.css` **NO** es obligatorio usar `@tailwind base/...`; el sistema vive en CSS propio.

---

## 3. Fuentes — patrón correcto (⚠️ bug clásico)

Cargar con `next/font/google` y exponer como variables. **El nombre de la variable de
`next/font` y el token de CSS deben ser DISTINTOS** para no crear una referencia circular.

### `app/layout.tsx`
```tsx
// Elegí las fuentes del proyecto. Ejemplo neutro: Sora (display) + Inter (body).
import { Sora, Inter } from 'next/font/google';

const display = Sora({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-display', display: 'swap' });
const body    = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body', display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body data-theme="light">{children}</body>
    </html>
  );
}
```

### En `globals.css` (consumir, NO redefinir)
```css
:root {
  --display: var(--font-display), sans-serif; /* fallback genérico */
  --body:    var(--font-body), sans-serif;
}
```

> ❌ **NUNCA** hagas esto (rompe TODAS las fuentes → la página cae a serif/Times):
> ```css
> --display: var(--font-display);
> --font-display: var(--display);  /* circular → inválido */
> ```

---

## 4. Sistema de diseño — `app/globals.css`

Todo el sistema vive en este archivo, en secciones numeradas:

```
1. Design tokens (:root)        → colores, fuentes, radios, --maxw, spacing, --ease
2. Reset / base                 → box-sizing, márgenes 0, body, img, a, button
3. Layout helpers               → .container/.wrap (max-width + padding lateral), .section
4. Tipografía                   → h1..h3, .eyebrow, .grad-text, .lead
5. Componentes reutilizables    → .btn (variantes), .chip, .card
6. Animaciones reveal           → .reveal + .d1..d4 (ver sección 6)
7. Estilos por sección          → .hero, .nav, .footer, etc.
8. Responsive (al final)        → @media 1000px / 760px / 560px
```

### Tokens mínimos (placeholder, reemplazar con el diseño real)
```css
:root {
  /* TODOS los valores son placeholder neutros: reemplazar por el branding del proyecto. */
  --bg:#ffffff; --panel:#ffffff; --fg:#111827; --fg-muted:#6b7280; --line:#e5e7eb;
  --accent:#3b5bdb; --accent-hover:#2f4fc4; --accent-fg:#ffffff;
  --display: var(--font-display), sans-serif;
  --body:    var(--font-body), sans-serif;
  --maxw:1200px; --pad:clamp(20px,5vw,64px);
  --r-sm:8px; --r-md:14px; --r-lg:20px;
  --ease:cubic-bezier(.22,.61,.36,1);
}
```

Reglas:
- **Tema claro por defecto** (`data-theme="light"` en `<body>`). Dejar tokens dark preparados pero sin activar.
- Crear **clases reutilizables** (`.btn`, `.chip`, `.card`, `.container`, `.eyebrow`) y usarlas.
- Componentes **nunca** con colores/medidas hardcodeadas: siempre `var(--...)`.

---

## 5. Estructura de carpetas

```
app/
  layout.tsx          # fuentes + metadata global + <body data-theme="light">
  page.tsx            # home: renderiza el componente contenedor
  globals.css         # tokens + sistema + secciones + responsive
  icon.png            # favicon (ver sección 8)
  favicon.ico         # favicon multi-tamaño
  <ruta>/page.tsx     # una carpeta por página, con su layout.tsx para metadata
components/
  <Pagina>.tsx        # contenedor "use client" que ensambla secciones y activa useScrollReveal
  Icon.tsx            # registro de íconos SVG inline
  sections/           # cada sección: Header, Hero, Footer, etc. (1 archivo c/u)
lib/
  data.ts             # TODO el contenido, tipado (arrays/objetos)
  hooks/useScrollReveal.ts
  utils/cn.ts
public/
  logos/ , *.png      # imágenes servidas estáticamente (rutas absolutas /...)
```

### Convenciones de componentes
- **Contenido siempre en `lib/data.ts`**, tipado, y mapeado en el componente. Cero texto suelto.
- Páginas que comparten layout (casos de éxito, productos) → **UNA plantilla reutilizable**
  que recibe datos por props; cada ruta solo le pasa su objeto.
- El contenedor de la página (`components/<Pagina>.tsx`) es `"use client"`, ensambla las
  secciones en orden y llama a `useScrollReveal()`.
- Helper `cn(...)` para clases condicionales.

---

## 6. Animaciones — reveal **SSR-safe** (⚠️ patrón obligatorio)

La base de los elementos `.reveal` debe ser **VISIBLE**. El ocultar-para-animar se activa
**solo cuando hay JS**. Así, si el JS tarda o falla, la página se ve **completa y ordenada**
(no en blanco).

### CSS
```css
/* Base: visible. Se oculta SOLO bajo .reveal-on (que agrega el JS). */
.reveal-on .reveal { opacity:0; transform:translateY(22px); transition:opacity .8s var(--ease), transform .8s var(--ease); }
.reveal-on .reveal.is-visible { opacity:1; transform:none; }
.reveal.d1{transition-delay:.08s} .reveal.d2{transition-delay:.16s} .reveal.d3{transition-delay:.24s} .reveal.d4{transition-delay:.32s}
@media (prefers-reduced-motion: reduce){ .reveal-on .reveal{opacity:1;transform:none;transition:none} }
```

### `lib/hooks/useScrollReveal.ts`
```ts
'use client';
import { useEffect } from 'react';
export function useScrollReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const inView = (el: HTMLElement) => { const r = el.getBoundingClientRect(); return r.top < innerHeight*0.92 && r.bottom > 0; };
    els.forEach(el => { if (inView(el)) el.classList.add('is-visible'); }); // 1) lo visible no parpadea
    document.documentElement.classList.add('reveal-on');                    // 2) recién ahora se oculta el resto
    if (reduce || typeof IntersectionObserver === 'undefined') { els.forEach(el => el.classList.add('is-visible')); return; }
    const io = new IntersectionObserver((entries, o) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); o.unobserve(e.target); } }), { threshold:0.12, rootMargin:'0px 0px -8% 0px' });
    els.forEach(el => { if (!el.classList.contains('is-visible')) io.observe(el); });
    return () => io.disconnect();
  }, []);
}
```

> Para la animación de **entrada del hero**: mismo principio. Base visible; el contenedor
> agrega una clase (ej. `preload`) tras montar y la quita en el siguiente frame para
> disparar el stagger. Sin JS / en SSR el hero se ve igual.

---

## 7. Responsive

- **Desktop-first pragmático**: el sistema se escribe para desktop y al final de `globals.css`
  va un bloque de refinamiento móvil.
- Teléfono de referencia: **iPhone 13 Pro (390px)**.
- Breakpoints: `@media (max-width:1000px)`, `760px`, `640px/560px`.
- En móvil: reducir `--pad`, evitar overflow horizontal (`body{overflow-x:hidden}`),
  botones full-width, apilar grids, achicar/ocultar lo que no funcione.

---

## 8. Favicon

Usar la **convención de archivos de Next** (funciona con export estático):
- `app/icon.png` (cuadrado, ~512px) y `app/favicon.ico` (multi-tamaño).
- Si el logo es **rectangular**, generar un **cuadrado con padding transparente** (centrado),
  para que no se deforme en la pestaña. (Se puede con Pillow: pegar el logo centrado en un
  lienzo cuadrado y exportar a `icon.png` + `favicon.ico` con `sizes=[(16,16),(32,32),(48,48),(64,64)]`.)
- Next genera los `<link rel="icon">` solo.

---

## 9. Deploy

### Export estático
- `npm run build` genera `out/`. Eso es el sitio entero.
- Usar `<img>` normales (no `next/image`) por el export.
- Las rutas de assets son **absolutas** (`/_next/...`, `/logos/...`).

### Hostinger
- Subir el contenido de `out/` al hosting. Listo.

### CapRover (Docker + nginx) — archivos en la raíz
**`captain-definition`**
```json
{ "schemaVersion": 2, "dockerfilePath": "./Dockerfile" }
```
**`Dockerfile`** (multi-stage: build Node → sirve con nginx)
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
**`nginx.conf`** (HTML sin cache, assets hasheados 1 año → cada deploy se ve al instante)
```nginx
server {
  listen 80; server_name _;
  root /usr/share/nginx/html; index index.html;
  gzip on; gzip_types text/css application/javascript image/svg+xml application/json; gzip_min_length 1024;

  location = /index.html { add_header Cache-Control "no-cache, no-store, must-revalidate"; add_header Pragma "no-cache"; add_header Expires "0"; }
  location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ { try_files $uri =404; expires 1y; add_header Cache-Control "public, immutable"; }
  location / { try_files $uri $uri/ $uri.html /404.html; add_header Cache-Control "no-cache, no-store, must-revalidate"; }
  error_page 404 /404.html;
}
```
**`.dockerignore`**: `node_modules`, `.next`, `out`, `.git`, `_design`, `*.zip`.

> El contenedor expone el **puerto 80** (CapRover lo toma por defecto). Activar HTTPS con Let's Encrypt en el panel.

---

## 10. Verificación (no confiar solo en "compila")

1. `npm run build` → debe terminar verde y generar `out/`.
2. Servir el export y **mirar un screenshot**:
   ```bash
   python -m http.server 8080 --directory out
   # luego, headless (Windows + Edge):
   # msedge --headless=new --disable-gpu --user-data-dir=<temp> --window-size=1280,900 --screenshot=out.png http://localhost:8080/
   ```
3. Confirmar: estilos aplicados (no serif/links azules), fuentes correctas, secciones visibles.
4. Revisar el `<head>`: que el `<link rel="stylesheet">` cargue **200** y `text/css`.

---

## 11. ⚠️ Errores conocidos y cómo evitarlos

> Estos ya nos pasaron. Leer antes de tocar nada.

1. **Página "desordenada" / sin estilos (serif, links azules, íconos gigantes).**
   Casi siempre = **el CSS no carga/aplica**. Causas frecuentes:
   - **Correr `npm run build` mientras `npm run dev` está activo** (o dos `npm run dev`)
     desde la misma carpeta → ambos escriben en `.next` y lo corrompen → el CSS da **404**.
     **Fix:** parar todo, `rm -rf .next` (PowerShell: `Remove-Item -Recurse -Force .next`),
     y volver a `npm run dev`. **Regla: nunca build + dev a la vez.**
   - **Abrir `out/index.html` con doble clic (file://)** → las rutas absolutas `/_next/...`
     no resuelven. **Fix:** servirlo (Hostinger/CapRover en raíz, o `python -m http.server --directory out`).

2. **Fuentes rotas (todo cae a Times/serif).** Referencia circular entre `--display`/`--font-display`.
   Ver sección 3: la variable de `next/font` y el token de CSS deben ser **distintos**.

3. **Al entrar, las secciones aparecen en blanco hasta scrollear.** Reveal mal hecho
   (base oculta dependiendo del JS). Usar el patrón **SSR-safe** de la sección 6.

4. **Logo se ve "flotando" / con mucho espacio.** Los PNG suelen traer **espacio en blanco
   interno**. Soluciones: recortar el whitespace (Pillow/ImageMagick) o, temporalmente,
   compensar con márgenes. Para el favicon, generar un cuadrado con padding.

5. **Imágenes pesadas.** Optimizar antes de producción (un logo no debería pesar MB).

6. **Cache en producción tras deploy.** Si no se ven los cambios: el `index.html` quedó
   cacheado. Por eso `nginx.conf` lo marca `no-cache` (sección 9). La primera vez, hard refresh.

---

## 12. Checklist final de un scaffold

- [ ] `next.config.js` con `output:'export'` + `images.unoptimized`.
- [ ] `tsconfig` con alias `@/*`.
- [ ] Fuentes con `next/font` (variables distintas, sin circular).
- [ ] `globals.css` con tokens + secciones + responsive al final.
- [ ] `lib/data.ts` con TODO el contenido tipado.
- [ ] `components/sections/` (Header, Hero, Footer mínimo) mapeando data.
- [ ] `useScrollReveal` SSR-safe + reveal CSS bajo `.reveal-on`.
- [ ] Favicon `app/icon.png` + `app/favicon.ico`.
- [ ] Deploy: `Dockerfile`, `nginx.conf`, `captain-definition`, `.dockerignore`.
- [ ] `npm run build` verde + `out/` generado + screenshot OK.
