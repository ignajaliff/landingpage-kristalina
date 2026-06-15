'use client';
import { useRef, type CSSProperties } from 'react';
import type { GalleryItem } from '@/lib/data';
import { Icon } from '@/components/Icon';

interface PhotoCarouselProps {
  id: string;
  soft?: boolean;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: GalleryItem[];
  perView?: number; // cuántas fotos se ven a la vez (desktop)
}

/* Sección reutilizable: galería de fotos en carrusel deslizable. */
export function PhotoCarousel({
  id,
  soft,
  eyebrow,
  title,
  subtitle,
  items,
  perView = 3,
}: PhotoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.9 * dir, behavior: 'smooth' });
  };

  return (
    <section className={`section${soft ? ' section-soft' : ''}`} id={id}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p className="lead">{subtitle}</p>
        </div>

        <div
          className="carousel reveal"
          style={{ '--per-view': perView } as CSSProperties}
        >
          <button
            type="button"
            className="carousel-btn prev"
            aria-label="Foto anterior"
            onClick={() => scroll(-1)}
          >
            <Icon name="chevron-left" size={22} />
          </button>

          <div className="carousel-track" ref={trackRef}>
            {items.map((item, i) => (
              <div key={i} className="carousel-item">
                {item.src ? (
                  <img src={item.src} alt={item.alt} loading="lazy" />
                ) : (
                  <div className="gallery-placeholder" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="carousel-btn next"
            aria-label="Foto siguiente"
            onClick={() => scroll(1)}
          >
            <Icon name="chevron-right" size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
