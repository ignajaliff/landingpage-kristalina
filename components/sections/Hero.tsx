'use client';
import { useEffect, useRef } from 'react';
import { hero } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Entrada del hero SSR-safe: agrega .preload (oculta) y la quita al frame
  // siguiente para disparar el stagger. Sin JS, el hero se ve completo.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('preload');
    const id = requestAnimationFrame(() => el.classList.remove('preload'));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container hero-inner hero-stagger">
        {/* Espacio duro antes de la última palabra: evita que "de" quede
            colgando y mantiene "de Sarro" junto al envolver el título. */}
        <h1 className="hero-title">
          {hero.title.replace(/\s+(\S+)$/, ' $1')}
        </h1>
        <p className="lead hero-lead">{hero.subtitle}</p>

        {/* Tres tarjetas apiladas verticalmente en la columna izquierda */}
        <div className="hero-cards">
          {hero.highlights.map((h) => (
            <div key={h.title} className="hero-card">
              <span className="hero-card-icon">
                <Icon name={h.icon} size={20} />
              </span>
              <div className="hero-card-body">
                <strong>{h.title}</strong>
                <span>{h.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón principal debajo de las tarjetas */}
        <a href={hero.contactCta.href} className="btn btn-primary hero-cta">
          {hero.contactCta.label}
          <Icon name="arrow-right" size={18} />
        </a>
      </div>
    </section>
  );
}
