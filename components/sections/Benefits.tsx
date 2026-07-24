import { benefits, benefitsSection } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Benefits() {
  return (
    <section className="section section-benefits" id="benefits">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{benefitsSection.eyebrow}</span>
          <h2 className="grad-text">{benefitsSection.title}</h2>
          <p className="lead">{benefitsSection.subtitle}</p>
        </div>

        {/* Un solo panel dividido en 4 áreas: "un equipo → cuatro áreas".
            Cada área entra escalonada, alternando desde izquierda/derecha. */}
        <div className="benefits-panel reveal d1">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="benefit-area reveal-area"
              style={{ transitionDelay: `${0.1 + i * 0.13}s` }}
            >
              <span className="benefit-area-icon">
                <Icon name={b.icon} size={22} />
              </span>
              <h3>{b.title}</h3>
              <ul>
                {b.items.map((it) => (
                  <li key={it}>
                    <Icon name="check" size={15} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Tarjeta propia solo para la ilustración */}
          <div className="benefit-area benefit-media reveal-area">
            <img src="/imagen_tarjeta_sinfondo.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
