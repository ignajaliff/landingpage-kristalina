import { steps, featuresSection } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{featuresSection.eyebrow}</span>
          <h2 className="grad-text">{featuresSection.title}</h2>
        </div>

        {/* --- Cómo opera el sistema --- */}
        <div className="howto-text reveal d1">
          {featuresSection.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'lead' : undefined}>
              {p}
            </p>
          ))}
        </div>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.title} className={`card step-card reveal d${(i % 4) + 1}`}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="step-icon">
                <Icon name={s.icon} size={22} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
