# CLAUDE.md — Hoja de ruta del proyecto web

> Este archivo es leído automáticamente por Claude al iniciar cualquier conversación en este proyecto.
> Contiene el contexto de la web, las decisiones tomadas y el estado actual del desarrollo.
> **Mantenerlo actualizado es obligatorio** — es la memoria del proyecto entre sesiones.

---

## Proyecto

**Nombre**: Grupo Kristalina
**Tipo**: Sitio institucional (home + una página por línea de servicio)
**Cliente**: [completar]
**Desarrollado por**: [completar]
**Inicio**: 2026-11-17
**Sistema de gestión asociado**: Ninguno todavía
**Proyecto Supabase compartido**: Ninguno todavía

### Descripción de la web

Web de Grupo Kristalina (Chile), dirigida a administradores de edificios. Presenta tres líneas de servicio para el agua y las redes sanitarias, cada una con su marca: **Kristalina KI-O** (sarro e incrustaciones), **Kristalina Klean** (desagües y matrices obstruidas) y **Katharos** (grasas, aceites y olores). Objetivo: que pidan cotización.

---

## Reglas del proyecto

Este proyecto respeta estrictamente los siguientes documentos. Leerlos antes de hacer cualquier cambio:

* [ai-pmp/rules.txt](ai-pmp/rules.txt) — Stack Next.js, arquitectura general y reglas de código
* [ai-pmp/design-rules.txt](ai-pmp/design-rules.txt) — Dirección estética, tipografía, color y animaciones
* [ai-pmp/frontend-rules.txt](ai-pmp/frontend-rules.txt) — Componentes, secciones, islas dinámicas y formularios
* [ai-pmp/supabase-web-rules.txt](ai-pmp/supabase-web-rules.txt) — Conexión de solo lectura, `web_config` y RLS
* [ai-pmp/seo-rules.txt](ai-pmp/seo-rules.txt) — Metadata, Open Graph, sitemap y Core Web Vitals
* [ai-pmp/error-handling.txt](ai-pmp/error-handling.txt) — Fallbacks y estados de carga
* [ai-pmp/naming-rules.txt](ai-pmp/naming-rules.txt) — Convenciones de nombres
* [ai-pmp/git-rules.txt](ai-pmp/git-rules.txt) — Commits y ramas

> La carpeta `KNOW - HOW WEB/` es el kit de origen: no se edita desde este proyecto ni forma parte del build.
> **Este proyecto se desvía del kit en un punto central: es export estático** (ver "Decisiones técnicas"). Donde las reglas hablen de ISR, `revalidate` o Vercel, manda lo que dice este archivo.

---

## Stack del proyecto

* Next.js 16 (App Router) con **export estático** (`output: 'export'`) + TypeScript 6 strict
* Tailwind CSS v4 (`@tailwindcss/postcss`)
* Motion 14 (`motion/react`) para animaciones
* ESLint 10 + `eslint-config-next`
* Supabase: todavía no instalado ni conectado
* React Hook Form + Zod: solo si hay formulario de contacto (todavía no instalados)

---

## Dirección estética

**Concepto**: corporativo-técnico, claro y confiable. Hero azul marino a sangre con el contenido centrado, sin foto; tarjetas blancas de servicio que se montan sobre el borde inferior del hero, cada una con el logo y el color de su marca
**Tipografía display**: Sora (700 títulos, 600 títulos de tarjeta)
**Tipografía de texto**: DM Sans (400 / 700)
**Paleta**: marino `#141a3a` (dominante), blanco de fondo, celeste `#2fb4e9` (botón principal y acentos), celeste claro `#7fd3f5` (eyebrow), texto sobre marino `#c9d0e6`
**Colores por marca** (cada página de servicio usará su `brand` como color principal):

| Marca | brand (texto) | accent (línea/acento) |
|---|---|---|
| Kristalina KI-O | `#27307f` | `#2fb4e9` |
| Kristalina Klean | `#1f6b2b` | `#8dc63f` |
| Katharos | `#0f2f5f` | `#3a9be0` |

**Referencia**: guía "Hero · Grupo Kristalina" del cliente (`Página empresarial Kristalina.zip` en la raíz: `index.html` + `README.md`). Es la fuente de verdad de medidas, colores y tipografías.
**Logos**: `public/img/` — `kristalina.png` (transparente), `klean.png` y `katharos.png` (fondo blanco: se usan con `mix-blend-multiply`; si llegan versiones transparentes, quitarlo).

Los tokens viven en [src/styles/globals.css](src/styles/globals.css) y las fuentes en [src/app/fonts.ts](src/app/fonts.ts): cambiar la dirección es tocar solo esos dos archivos.

---

## Comandos

```
npm run dev          → servidor de desarrollo (http://localhost:3000)
npm run build        → genera la carpeta out/ lista para subir al hosting
npm run preview      → sirve out/ en local para probar exactamente lo que se sube
npm run typecheck    → verificación de tipos (tsc --noEmit)
npm run lint         → linter
```

### Publicar en hosting compartido (Hostinger, SiteGround, etc.)

1. `npm run build`
2. Subir **todo el contenido** de `out/` (incluido el archivo oculto `.htaccess`) a `public_html/`
3. No hace falta Node en el servidor: son solo archivos HTML, CSS y JS

El sitio asume que vive en la raíz del dominio. Si va en una subcarpeta, hay que configurar `basePath` en `next.config.ts`.

---

## Estructura

```
src/
  app/                ← rutas, layout raíz, metadata, 404, error, favicon
  components/
    sections/         ← una sección de página por archivo (Hero, ...)
    ui/               ← piezas reutilizables (FadeIn, BotonLink, TarjetaServicio, BloqueServicio, ConectorServicios, OndasAgua, EncabezadoSeccion, FichaProducto, Icono)
    dynamic/          ← islas conectadas a Supabase (vacía por ahora)
  content/            ← textos del sitio, tipados (home.ts, site.ts, servicios/ con un archivo por servicio)
  lib/                ← constantes y utilidades (SITE_URL)
  styles/globals.css  ← tokens de color y utilidades de diseño
public/               ← archivos que se copian tal cual a out/ (.htaccess, imágenes)
```

**Para agregar una sección**: crear `src/components/sections/Nombre.tsx`, poner sus textos en `src/content/home.ts` y sumarla en `src/app/page.tsx`.

---

## Páginas de la web

| Página | Ruta | Estado | Notas |
|--------|------|--------|-------|
| Home | `/` | En desarrollo | Solo sección Hero |
| Kristalina KI-O | `/kristalina-ki-o/` | Maquetada | 6 secciones con contenido del PDF; faltan testimonios y fotos de instalaciones |
| Kristalina Klean | `/kristalina-klean/` | Maquetada | Ídem |
| Katharos | `/katharos/` | Maquetada | Ídem |

Las tres páginas salen de una sola ruta dinámica, [src/app/[servicio]/page.tsx](src/app/[servicio]/page.tsx), con `generateStaticParams` y `dynamicParams = false`: en el build se genera un HTML por servicio y cualquier otro slug da 404. **Agregar un servicio = crear su archivo en [src/content/servicios/](src/content/servicios/) (tipado con `Servicio` de `tipos.ts`) y sumarlo a `SERVICIOS` en `index.ts`**, más su marca en `lib/marcas.ts` y sus colores en `globals.css`. El contenido de cada servicio sale de su PDF en la raíz del proyecto (`KRISTALINA- RESUMEN EJECUTIVO & FICHAS TECNICAS.pdf`, `KRISTALINA KLEAN - ...pdf`, `KATHAROS - ...pdf`).
| 404 | (cualquier ruta inexistente) | Maquetada | La sirve `.htaccess` vía `/404.html` |

Estados posibles: `Pendiente` / `En desarrollo` / `Maquetada` / `Conectada` / `Completa`

### Secciones de la home

| Sección | Archivo | Estado |
|---------|---------|--------|
| Hero | `src/components/sections/Hero.tsx` | Maquetada según la guía del cliente, pero centrada y sin la columna de foto (pedido del usuario, 2026-11-17) — eyebrow, h1, párrafo, 2 CTAs y 3 tarjetas de servicio sin logo (`ui/TarjetaServicio`). `/#cotizar` todavía no existe |
| Servicios | `src/components/sections/Servicios.tsx` | Prototipo — 3 bloques apilados (KI-O, Klean, Katharos) con logo, título, texto (tomado de los PDF) y botón "Ver detalles" hacia su página (`ui/BloqueServicio`). Cada tarjeta del hero se une con su bloque por una línea de su color (`ui/ConectorServicios`) |

### Secciones de las páginas de servicio

| Sección | Archivo | Estado |
|---------|---------|--------|
| HeroServicio | `src/components/sections/HeroServicio.tsx` | Maquetada — "Volver a servicios", logo centrado sobre ondas de agua (`ui/OndasAgua`), eyebrow, h1, descripción, 2 CTAs y 3 datos clave (`pagina.datos`) |
| ComoFunciona | `src/components/sections/ComoFunciona.tsx` | Maquetada — pasos numerados unidos por una línea (en fila desde 900px) |
| BeneficiosServicio | `src/components/sections/BeneficiosServicio.tsx` | Maquetada — 6 tarjetas con ícono (`ui/Icono`) sobre fondo teñido |
| CaracteristicasServicio | `src/components/sections/CaracteristicasServicio.tsx` | Maquetada — fichas técnicas (`ui/FichaProducto`), foto opcional (solo KI-O) y "Dónde se aplica" |
| TestimoniosServicio | `src/components/sections/TestimoniosServicio.tsx` | Maquetada con **testimonios pendientes** (etiquetados; los PDF no traen) |
| ResultadosServicio | `src/components/sections/ResultadosServicio.tsx` | Maquetada con **recuadros de foto pendiente** (faltan fotos de instalaciones) |

---

## Contenido dinámico — Qué se administra desde el sistema de gestión

Ninguno todavía. Todo el contenido es estático en `src/content/`.

| Valor en la web | Origen (tabla/clave) | Default si la base falla | Frescura |
|-----------------|----------------------|--------------------------|----------|
| — | — | — | — |

Frescuras posibles **en este proyecto**: `Build` (estático, requiere volver a subir `out/`) / `Cliente (al cargar)` (isla que consulta Supabase en el navegador). **No hay `Revalidate`**: sin servidor no existe ISR.

---

## Base de datos — Tablas que la web lee

```
[Ninguna todavía]
```

---

## Checklist de entrega

- [ ] `npm run build` pasa sin errores ni warnings de tipos
- [ ] Dominio final cargado en `SITE_URL` ([src/lib/constants.ts](src/lib/constants.ts))
- [ ] Toda tabla que lee la web tiene RLS con SELECT público SOLO de lo publicado
- [ ] Ningún valor dinámico rompe la página si Supabase no responde
- [ ] Metadata completa en todas las páginas: title, description, Open Graph con imagen (`public/og.jpg` 1200x630)
- [ ] `sitemap.ts` y `robots.ts` generados y accesibles
- [ ] Imágenes pre-optimizadas (WebP/AVIF, tamaño real de uso) y con dimensiones definidas
- [ ] Lighthouse en móvil: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90
- [ ] Probada en móvil real (no solo el emulador del navegador)
- [ ] Favicon, título de pestaña y preview al compartir el link por WhatsApp verificados
- [ ] `.htaccess` subido y 404 personalizada funcionando en el hosting real
- [ ] Redirect sin www → con www (o al revés) y HTTPS forzado en el hosting
- [ ] Si hay formulario de contacto: honeypot activo y constraints SQL en la tabla

---

## Decisiones técnicas tomadas

* **Export estático en vez de servidor Next.js.** El destino es hosting compartido (Hostinger, SiteGround) sin Node, así que `next.config.ts` usa `output: 'export'` y el build produce `out/`. Consecuencias:
  * No hay ISR, `revalidate`, `unstable_cache`, rutas API ni Server Actions. El contenido administrado desde Supabase solo puede entrar por **islas de cliente** (`components/dynamic/`) o regenerando el build.
  * `images.unoptimized: true`: `next/image` no optimiza. Las imágenes se suben ya comprimidas y en su tamaño final.
  * `trailingSlash: true`: cada ruta se exporta como `carpeta/index.html`, que Apache/LiteSpeed sirven sin reglas de reescritura.
  * `sitemap.ts` y `robots.ts`, cuando se creen, necesitan `export const dynamic = 'force-static'`.
* **`public/.htaccess`** define la 404 personalizada, cache largo para `/_next/static/` y compresión. Probado solo en local: verificar en el hosting real.
* **TypeScript 6, no 7**: `typescript-eslint` (que usa `eslint-config-next`) todavía no soporta TS 7. Subir cuando lo soporte.
* **Tailwind escanea solo `src/`** (`source('..')` en `globals.css`) para que los ejemplos de clases del kit y de `ai-pmp/` no generen CSS.
* **Fuentes como utilidades propias** (`font-display`, `font-body` en `globals.css`) en vez de `@theme`, porque `next/font` ya inyecta variables con esos mismos nombres.
* **`SITE_URL` es un placeholder** (`https://www.example.com`) hasta conocer el dominio.
* **Colores de marca como tokens** (`--kio-brand`, `--klean-accent`, etc. en `globals.css`). Las clases por marca viven en `src/lib/marcas.ts` (`ESTILOS_MARCA`), escritas completas porque Tailwind no detecta clases armadas dinámicamente.
* **Temas por marca (`tema-kio`, `tema-klean`, `tema-katharos`)**: utilidades de `globals.css` que definen `--marca-brand` y `--marca-accent` en un contenedor. Dentro, los componentes usan clases genéricas (`bg-marca-brand`, `stroke-marca-accent`, variantes `marca`/`marcaSecundario` de `BotonLink`), así una misma pieza sirve para las tres marcas. Así se cumple la regla de la guía: cada página de servicio toma su `brand` como color principal.
* **Hero de servicio claro, no oscuro**: los logos de Klean y Katharos tienen fondo blanco y letras oscuras, así que el logo centrado solo funciona sobre fondo claro (con `mix-blend-multiply`). El color de la marca va en el brillo de fondo, las ondas, la línea superior y los botones.
* **Animaciones de entrada en CSS puro, nunca con estado inicial invisible desde JS** (2026-11-17): `FadeIn` usa la animación `entrada` de `globals.css`. Antes usaba Motion, que renderizaba el contenido con `opacity: 0` hasta que cargara el JavaScript; cuando el JS no cargó, la página quedó vacía (hero sin texto ni botones). Con CSS, el contenido se ve aunque falle el JS. Usa `animation-fill-mode: backwards` y no `both`: si el estado final queda aplicado, el elemento queda aislado del fondo y los logos con `mix-blend-multiply` muestran su recuadro blanco. Motion queda solo para las líneas de `ConectorServicios`, que son decorativas.
* **En desarrollo, abrir siempre `http://localhost:3000`**: Next 16 bloquea su JavaScript de desarrollo cuando la página se abre desde otra dirección, y entonces no hay líneas ni HMR. `allowedDevOrigins: ['127.0.0.1']` en `next.config.ts` habilita también `127.0.0.1`. La IP de red (`192.168.x.x:3000`) sigue bloqueada; para probar desde el celular, agregarla ahí. No afecta al build de producción.
* **Líneas tarjeta → bloque (`ConectorServicios`)**: isla de cliente que envuelve `<Hero />` y `<Servicios />` en `page.tsx`. Mide las tarjetas (`data-linea-inicio`) y los logos (`data-linea-fin`) con offsets, que no se ven afectados por las animaciones de entrada, y dibuja un SVG que se recalcula con `ResizeObserver`. Las líneas bajan por carriles a la derecha (la primera tarjeta usa el más interno y gira última) para que nunca se crucen. Por eso `Servicios` reserva `pr-[120px]` desde 900px. Debajo de 900px no se dibujan y cada bloque lleva un borde izquierdo de su color.
* **Hero centrado, sin foto**: se aparta de la guía del cliente (que tenía texto a la izquierda y foto a la derecha) por pedido del usuario. El padding inferior del hero (`clamp(128px,15vw,216px)`) deja lugar a las tarjetas que se montan encima con margen negativo.
* **Repositorio**: github.com/ignajaliff/landingpage-kristalina (público). Este proyecto vive en la rama `sitio-estatico`, creada sobre el historial de `main`. `main` tiene otra landing (Docker + CapRover, `captain-definition`): no se pisó por pedido del usuario (2026-11-17). Si se fusiona, CapRover podría desplegar `main` y fallar, porque este sitio es export estático sin Dockerfile. Los PDF, el zip del cliente y el kit `KNOW - HOW WEB` están en `.gitignore` para no publicarlos.
* **Breakpoint de la guía**: tarjetas en 3 columnas desde 900px (`min-[900px]:`). **No mezclar `sm:`/`md:` con `min-[900px]:` sobre la misma propiedad**: Tailwind v4 puede ordenar `sm:` después y pisar la regla de 900px (pasó en Resultados). Usar `min-[640px]:` junto a `min-[900px]:`.
* **Páginas de servicio = una sola estructura para las tres marcas** (2026-11-17): el `div` con `tema-*` en `[servicio]/page.tsx` tiñe todas las secciones. El contenido vino de los PDF del cliente; se mantuvo su tono prudente ("favorece", "busca") sin prometer de más. Testimonios y fotos de instalaciones no existían: quedan como pendientes visibles, nunca inventados.
* **Foto del KI-O** (`public/img/servicios/kio-ionizador.jpg`, 38 KB) extraída tal cual del PDF de fichas técnicas.

---

## Estado actual del desarrollo

**Última sesión**: 2026-11-17
**Próximo paso**: énfasis de diseño en las páginas de servicio (pedido del usuario), y cargar testimonios reales y fotos de instalaciones.

**Lo que está funcionando**:
* Infraestructura completa: Next.js con export estático, Tailwind v4, Motion, ESLint, TypeScript strict
* Hero replicado de la guía del cliente, comparado lado a lado con su `index.html` en 390, 900 y 1440px
* 404 y página de error con la estética del sitio
* Favicon (`src/app/icon.svg`, gota celeste sobre marino)
* `npm run build`, `npm run typecheck` y `npm run lint` pasan limpios

**Lo que está pendiente**:
* Completar cliente y "desarrollado por" en este archivo
* Dominio final en `SITE_URL`
* Imagen Open Graph `public/og.jpg`
* Testimonios reales (con autorización) en `content/servicios/*.ts` — hoy salen de `testimoniosPendientes()` con etiqueta "Testimonio pendiente"
* Fotos de instalaciones para Resultados (`resultados.fotos[].imagen`) — hoy recuadros "Foto pendiente"
* Barra de navegación, formulario `#cotizar`, footer
* Páginas dedicadas de cada servicio (destino de las tarjetas)
* Logos en WebP o PNG transparente (hoy PNG de 74–112 KB; Klean y Katharos con fondo blanco)
* `sitemap.ts`, `robots.ts` y JSON-LD (etapa de SEO)
* Decidir si la rama `sitio-estatico` reemplaza a `main` en GitHub (ver Decisiones técnicas)

**Problemas conocidos o deuda técnica**:
* Ninguno

---

## Instrucciones para la IA

1. **Antes de escribir cualquier código**, leer los documentos de `ai-pmp/` referenciados arriba.
2. **Respetar la dirección estética definida** en este archivo — no cambiar fuentes, paleta ni concepto sin que el usuario lo pida.
3. **No empezar nuevas páginas o secciones** sin que el usuario lo indique explícitamente.
4. **Antes de entregar cualquier cambio**: correr `npm run typecheck` y verificar que no hay imports rotos ni errores. Si el cambio es grande, verificar también que `npm run build` pasa.
5. **Nada que requiera servidor**: este sitio es export estático. No usar ISR, `revalidate`, `unstable_cache`, rutas API, Server Actions, `cookies()` ni `headers()`.
6. **Todo valor que venga de Supabase debe tener default hardcodeado** — la web nunca puede romperse ni quedar en blanco por un fallo de la base.
7. **Si hay ambigüedad** en un requerimiento, preguntar antes de implementar.
8. **No agregar dependencias nuevas** sin consultarlo primero.
9. **Los textos van en `src/content/`**, nunca hardcodeados en el JSX de las secciones.
10. **Actualizar las tablas de páginas, secciones y contenido dinámico** de este archivo cuando se complete una.
11. **El límite es 300 líneas por archivo** — si se supera, dividir en subcomponentes.
12. **Nunca leer, imprimir ni commitear el contenido de `.env`** ni de ningún archivo con credenciales.
13. **La web nunca escribe en Supabase** salvo la tabla del formulario de contacto.
14. **Después de cualquier cambio de schema en Supabase**, correr `get_advisors` del MCP y corregir las alertas antes de dar por terminada la tarea.
15. **Al terminar una sesión de trabajo**, actualizar la sección "Estado actual del desarrollo" de este archivo.
