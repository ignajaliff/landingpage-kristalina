// Scroll suave propio (handoff de la home): easeInOutCubic, duración según la distancia
// (800–1800 ms) y se cancela si el usuario toca la rueda, la pantalla o el teclado.
// Usa `behavior: 'instant'` para no sumarse al `scroll-behavior: smooth` global de globals.css.

let animacion = 0

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function cancelar() {
  if (animacion) cancelAnimationFrame(animacion)
  animacion = 0
  window.removeEventListener('wheel', cancelar)
  window.removeEventListener('touchstart', cancelar)
  window.removeEventListener('keydown', cancelar)
}

function irA(y: number) {
  window.scrollTo({ top: y, behavior: 'instant' })
}

function scrollSuaveA(destinoY: number) {
  cancelar()
  const inicio = window.scrollY
  const distancia = destinoY - inicio
  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducido || Math.abs(distancia) < 2) {
    irA(destinoY)
    return
  }

  const duracion = Math.min(1800, Math.max(800, Math.abs(distancia) * 0.8))
  const t0 = performance.now()
  const paso = (ahora: number) => {
    const t = Math.min(1, (ahora - t0) / duracion)
    irA(inicio + distancia * easeInOutCubic(t))
    if (t < 1) animacion = requestAnimationFrame(paso)
    else cancelar()
  }

  window.addEventListener('wheel', cancelar, { passive: true })
  window.addEventListener('touchstart', cancelar, { passive: true })
  window.addEventListener('keydown', cancelar)
  animacion = requestAnimationFrame(paso)
}

/** Lleva `el` hasta `fraccion` del alto de la ventana (0.16 = queda al 16 % desde arriba) */
export function scrollSuaveHasta(el: Element, fraccion: number) {
  const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * fraccion
  scrollSuaveA(Math.max(0, y))
}
