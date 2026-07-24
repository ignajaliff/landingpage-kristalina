'use client';
import { useEffect, useState } from 'react';

/* Pantalla de carga (~2s):
   Solo la gota del logo Kristalina llenándose con 4 franjas diagonales
   (de azul oscuro a celeste claro), una por una. Al completarse, se cierra.
   Etapas: fill-0 → fill-1..4 → out */
export function Splash() {
  // fills = cuántas franjas ya se llenaron (0 a 4)
  const [fills, setFills] = useState(0);
  const [stage, setStage] = useState<'fill' | 'out'>('fill');
  const [done, setDone] = useState(false);

  useEffect(() => {
    // TEMPORAL (mientras ajustamos): se muestra en cada carga.
    // Para volver a "solo la 1ª visita": ONCE_PER_SESSION = true
    // y restaurá el selector `.splash-seen .splash` en globals.css.
    const ONCE_PER_SESSION = false;

    const skip =
      (ONCE_PER_SESSION &&
        document.documentElement.classList.contains('splash-seen')) ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (skip) {
      setDone(true);
      return;
    }

    sessionStorage.setItem('kristalina-splash', '1');
    document.body.style.overflow = 'hidden';

    // Solo la gota llenándose, en ~2 segundos (sin la etapa del logo/nombre).
    const STEP = 380; // ms entre franja y franja
    const FULL = STEP * 4; // 4ª franja a 1520ms
    const timers = [
      setTimeout(() => setFills(1), STEP * 1),
      setTimeout(() => setFills(2), STEP * 2),
      setTimeout(() => setFills(3), STEP * 3),
      setTimeout(() => setFills(4), FULL),
      // breve pausa para ver la gota completa y se cierra con un fade suave
      setTimeout(() => setStage('out'), 1600),
      setTimeout(() => {
        setDone(true);
        document.body.style.overflow = '';
      }, 2000), // total = 2s (400ms de fade)
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (done) return null;

  // Las 4 franjas CURVAS de la gota, como en el logo Kristalina.
  // Cada path cubre su banda (de su curva ondulada hacia abajo). Al apilarse,
  // se ven las 4 tonalidades. viewBox 0..100 x 0..130.
  // band-1 = marino (arriba) ... band-4 = celeste claro (abajo).
  // Franjas DIAGONALES curvas, como el logo: barren de abajo-izq a arriba-der.
  // Cada path cubre desde su curva hacia abajo; al apilarse se ven las 4.
  // Las líneas suben hacia la derecha (más altas a la derecha) siguiendo un arco.
  const bands = [
    { color: '#293182', d: 'M-10,-15 H115 V15 C95,10 80,20 60,38 C42,54 26,64 6,60 C0,59 -6,56 -10,52 Z' },
    { color: '#0A70B8', d: 'M-10,52 C-6,56 0,59 6,60 C26,64 42,54 60,38 C80,20 95,10 115,15 V44 C96,40 82,50 62,68 C44,84 28,94 8,90 C1,88 -5,85 -10,80 Z' },
    { color: '#31B4E8', d: 'M-10,80 C-5,85 1,88 8,90 C28,94 44,84 62,68 C82,50 96,40 115,44 V80 C97,76 84,86 64,104 C46,120 30,128 10,124 C2,122 -4,119 -10,114 Z' },
    { color: '#65C7EA', d: 'M-10,114 C-4,119 2,122 10,124 C30,128 46,120 64,104 C84,86 97,76 115,80 V160 H-10 Z' },
  ];

  return (
    <div
      className={`splash is-${stage} fill-${fills}`}
      role="status"
      aria-label="Cargando"
    >
      <div className="splash-stage">
        <div className="splash-lockup">
          {/* Gota que se llena de abajo hacia arriba con 4 franjas curvas */}
          <div className="splash-drop">
            <svg viewBox="0 0 100 130" aria-hidden="true">
              <defs>
                <clipPath id="dropShape">
                  <path
                    d="M50,2 C50,2 94,55 94,86 C94,110 74,128 50,128
                       C26,128 6,110 6,86 C6,55 50,2 50,2 Z"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#dropShape)">
                {/* gota vacía (tono muy tenue) */}
                <rect x="0" y="0" width="100" height="130" fill="#eaf6fc" />
                {/* 4 franjas curvas; cada una entra desde abajo */}
                {bands.map((b, i) => (
                  <path
                    key={i}
                    className={`drop-band band-${i + 1}`}
                    d={b.d}
                    fill={b.color}
                  />
                ))}
              </g>
              {/* borde sutil de la gota */}
              <path
                d="M50,2 C50,2 94,55 94,86 C94,110 74,128 50,128
                   C26,128 6,110 6,86 C6,55 50,2 50,2 Z"
                fill="none"
                stroke="#cfe9f7"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
