import { about } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function About() {
  return (
    <section className="section section-soft" id="about">
      <div className="container about-grid">
        <div className="reveal">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          <p className="lead">{about.text}</p>

          <ul className="about-list">
            {about.bullets.map((b) => (
              <li key={b}>
                <span className="tick">
                  <Icon name="check" size={20} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a
            href={about.cta.href}
            className="btn btn-primary"
            style={{ marginTop: 28 }}
          >
            {about.cta.label}
          </a>
        </div>

        <div className="about-media reveal d2" aria-hidden="true" />
      </div>
    </section>
  );
}
