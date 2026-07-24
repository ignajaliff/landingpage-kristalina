'use client';
import { useEffect, useRef, useState } from 'react';
import { steps, featuresSection } from '@/lib/data';

export function Features() {
  // El bloque ALTO define cuánto scroll dura el proceso; dentro, el contenido
  // queda "pegado" (sticky) mientras la barra se llena 1 → 2 → 3 → 4.
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let ticking = false;
    const compute = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progreso = cuánto se recorrió el bloque alto respecto de su altura útil.
      // Empieza cuando su tope llega arriba y termina cuando su base sale.
      const total = r.height - vh;
      const raw = total > 0 ? -r.top / total : 0;
      // Se completa (paso 4) al 80% del recorrido y el 20% final queda como
      // PAUSA: la barra ya está llena y la sección sigue pegada un rato más
      // antes de liberar hacia la siguiente sección.
      const p = Math.max(0, Math.min(1, raw / 0.8));
      setProgress(p);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const n = steps.length;
  const active = Math.min(n - 1, Math.round(progress * (n - 1)));
  const fillPct = progress * 100;

  return (
    <section className="section" id="features">
      {/* Bloque ALTO: durante todo su recorrido el contenido queda sticky */}
      <div className="steps-track-scroll" ref={trackRef}>
        <div className="steps-sticky">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">{featuresSection.eyebrow}</span>
              <h2 className="grad-text">{featuresSection.title}</h2>
              <p className="howto-sub">{featuresSection.subtitle}</p>
            </div>

            {/* Barra de progreso ligada al scroll (baja = llena, sube = vacía) */}
            <div className="steps">
              <div className="steps-track">
                <div className="steps-fill" style={{ width: `${fillPct}%` }}>
                  <span className="steps-drop" aria-hidden="true" />
                </div>
                {steps.map((s, i) => {
                  const reached = fillPct >= (i / (n - 1)) * 100 - 0.5;
                  return (
                    <div
                      key={s.title}
                      className={`step-dot${reached ? ' done' : ''}${
                        i === active ? ' current' : ''
                      }`}
                      style={{ left: `${(i / (n - 1)) * 100}%` }}
                    >
                      <span className="step-num">{i + 1}</span>
                    </div>
                  );
                })}
              </div>

              <div className="steps-cards">
                {steps.map((s, i) => {
                  const reached = fillPct >= (i / (n - 1)) * 100 - 0.5;
                  return (
                    <div
                      key={s.title}
                      className={`step-card${reached ? ' show' : ''}${
                        i === active ? ' current' : ''
                      }`}
                    >
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
