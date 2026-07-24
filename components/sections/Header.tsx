'use client';
import { useEffect, useState } from 'react';
import { brand, navLinks, navCta, navSocials } from '@/lib/data';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparente sobre el hero; fondo sólido al hacer scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('nav', scrolled && 'scrolled')}>
      <div className="container nav-inner">
        {/* Izquierda: logo */}
        <a href="#top" className="nav-logo" aria-label={brand.name}>
          <img src="/kristalina-logo.png" alt={brand.name} />
        </a>

        {/* Centro: burbuja con links + redes */}
        <div className="nav-bubble">
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <span className="nav-bubble-sep" aria-hidden="true" />
          <div className="nav-socials">
            {navSocials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Derecha: contactar */}
        <div className="nav-cta">
          <a href={navCta.href} className="btn btn-primary">
            {navCta.label}
          </a>
          <button
            className="btn btn-ghost nav-burger"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {/* Menú móvil simple (se muestra al tocar el burger) */}
      {open && (
        <div className="container" style={{ paddingBottom: 16 }}>
          <nav className={cn('nav-mobile')} style={{ display: 'grid', gap: 8 }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
