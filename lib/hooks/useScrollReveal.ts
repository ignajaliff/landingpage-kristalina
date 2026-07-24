'use client';
import { useEffect } from 'react';

/**
 * Activa las animaciones "reveal" de forma SSR-safe y a prueba de fallos:
 * 1) marca como visibles los elementos que ya están en pantalla (no parpadean),
 * 2) recién entonces oculta el resto (clase .reveal-on en <html>),
 * 3) los va revelando al hacer scroll con IntersectionObserver,
 * 4) RESPALDO: un listener de scroll/resize revela cualquiera que entre en
 *    pantalla, por si el observer no dispara (garantiza que nada quede oculto).
 * Si no hay JS, todo queda visible.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // Revela un elemento y lo saca de la lista de pendientes.
    const reveal = (el: HTMLElement) => el.classList.add('is-visible');
    // ¿Su parte superior ya entró en el viewport (con un pequeño margen)?
    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.95 && r.bottom > 0;
    };

    // 1) lo que ya está visible no parpadea
    els.forEach((el) => {
      if (inView(el)) reveal(el);
    });
    // 2) recién ahora se oculta el resto
    document.documentElement.classList.add('reveal-on');

    // Sin animación / sin soporte: mostrar todo y salir
    if (reduce) {
      els.forEach(reveal);
      return;
    }

    let pending = els.filter((el) => !el.classList.contains('is-visible'));

    // 4) Respaldo por scroll/resize (rAF-throttled): revela lo que entra en vista
    let ticking = false;
    const check = () => {
      ticking = false;
      pending = pending.filter((el) => {
        if (inView(el)) {
          reveal(el);
          return false;
        }
        return true;
      });
      if (!pending.length) cleanup();
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    // 3) IntersectionObserver (camino principal)
    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries, o) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target as HTMLElement);
              pending = pending.filter((el) => el !== e.target);
              o.unobserve(e.target);
              if (!pending.length) cleanup();
            }
          }),
        { threshold: 0, rootMargin: '0px 0px -8% 0px' }
      );
      pending.forEach((el) => io!.observe(el));
    }

    function cleanup() {
      io?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Chequeo inicial por si algo ya estaba en vista al montar
    onScroll();

    return cleanup;
  }, []);
}
