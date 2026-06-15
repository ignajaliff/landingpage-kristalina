'use client';
import { useEffect, useState } from 'react';
import { brand, navLinks, navCta } from '@/lib/data';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // El logo aparece recién cuando se hace scroll hacia abajo.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('nav', scrolled && 'scrolled')}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label={brand.name}>
          <img src="/kristalina-logo.png" alt={brand.name} />
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

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
