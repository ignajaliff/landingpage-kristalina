'use client';
import { useEffect } from 'react';

/**
 * Activa las animaciones "reveal" de forma SSR-safe:
 * 1) marca como visibles los elementos que ya están en pantalla (no parpadean),
 * 2) recién entonces oculta el resto (clase .reveal-on en <html>),
 * 3) los va revelando al hacer scroll con IntersectionObserver.
 * Si no hay JS, todo queda visible.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < innerHeight * 0.92 && r.bottom > 0;
    };

    els.forEach((el) => {
      if (inView(el)) el.classList.add('is-visible');
    });
    document.documentElement.classList.add('reveal-on');

    if (reduce || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries, o) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            o.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => {
      if (!el.classList.contains('is-visible')) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}
