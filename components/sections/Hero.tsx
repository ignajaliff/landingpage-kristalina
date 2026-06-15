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
      <div className="container hero-grid">
        <div className="hero-copy hero-stagger">
          <span className="chip">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.subtitle}</p>

          <div className="hero-highlights">
            {hero.highlights.map((h) => (
              <div key={h.title} className="hero-hl">
                <span className="hero-hl-icon">
                  <Icon name={h.icon} size={20} />
                </span>
                <div>
                  <strong>{h.title}</strong>
                  <span>{h.text}</span>
                </div>
              </div>
            ))}
          </div>

          <a href={hero.contactCta.href} className="btn btn-primary hero-contact-btn">
            {hero.contactCta.label}
            <Icon name="arrow-right" size={18} />
          </a>
        </div>

        <div className="hero-visual">
          <img
            className="hero-logo"
            src="/kristalina-logo.png"
            alt="Kristalina"
          />
          <img
            className="hero-photo"
            src={hero.image.src}
            alt={hero.image.alt}
          />
        </div>
      </div>
    </section>
  );
}
