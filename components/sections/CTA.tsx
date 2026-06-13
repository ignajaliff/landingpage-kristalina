import { cta } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function CTA() {
  return (
    <section className="section cta" id="cta">
      <div className="container">
        <div className="cta-box reveal">
          <h2>{cta.title}</h2>
          <p>{cta.subtitle}</p>
          <a href={cta.button.href} className="btn btn-primary">
            {cta.button.label}
            <Icon name="arrow-right" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
