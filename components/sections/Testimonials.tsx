import { testimonials, testimonialsSection } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Testimonials() {
  return (
    <section className="section section-soft" id="testimonials">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{testimonialsSection.eyebrow}</span>
          <h2>{testimonialsSection.title}</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            {testimonialsSection.subtitle}
          </p>
        </div>

        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <figure key={i} className={`card testimonial-card reveal d${(i % 3) + 1}`}>
              <div className="stars" aria-label={`${t.rating} de 5`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Icon key={s} name="star" size={16} />
                ))}
              </div>
              <blockquote>
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true" />
                <span>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
