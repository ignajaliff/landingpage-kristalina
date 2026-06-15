import { benefits, benefitsSection, featuresNote } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Benefits() {
  return (
    <section className="section section-soft" id="benefits">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{benefitsSection.eyebrow}</span>
          <h2 className="grad-text">{benefitsSection.title}</h2>
          <p className="lead">{benefitsSection.subtitle}</p>
        </div>

        <div className="grid benefits-grid">
          {benefits.map((b, i) => (
            <div key={b.title} className={`card feature-card reveal d${(i % 4) + 1}`}>
              <span className="feature-icon">
                <Icon name={b.icon} size={24} />
              </span>
              <h3>{b.title}</h3>
              <ul className="about-list benefit-list">
                {b.items.map((it) => (
                  <li key={it}>
                    <span className="tick">
                      <Icon name="check" size={18} />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="features-note reveal">
          <Icon name="info" size={18} />
          <span>{featuresNote}</span>
        </p>
      </div>
    </section>
  );
}
