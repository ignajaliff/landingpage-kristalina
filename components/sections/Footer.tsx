import { brand, footer } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/kristalina-logo.png" alt={brand.name} />
            </div>
            <div className="footer-socials">
              {footer.socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">{footer.copyright}</div>
      </div>
    </footer>
  );
}
