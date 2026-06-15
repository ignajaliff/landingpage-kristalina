'use client';
import { useState } from 'react';
import { characteristics } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Characteristics() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="caracteristicas">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{characteristics.eyebrow}</span>
          <h2 className="grad-text">{characteristics.title}</h2>
          <p className="lead">{characteristics.description}</p>
        </div>

        <div className="accordion reveal d1">
          {characteristics.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.title}
                className={`accordion-item${isOpen ? ' open' : ''}`}
              >
                <button
                  type="button"
                  className="accordion-header"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="accordion-icon">
                    <Icon name={it.icon} size={20} />
                  </span>
                  <span className="accordion-title">{it.title}</span>
                  <span className="accordion-chevron">
                    <Icon name="chevron-right" size={20} />
                  </span>
                </button>

                <div className="accordion-panel">
                  <div className="accordion-panel-inner">
                    <p>{it.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
