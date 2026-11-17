import { type ReactNode } from 'react'

// Íconos de línea propios (sin dependencias). Toman el color del texto (currentColor).
const TRAZOS = {
  escudo: <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />,
  flujo: (
    <>
      <path d="M3 8c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
      <path d="M3 13c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
      <path d="M3 18c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
    </>
  ),
  llave: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />,
  hoja: (
    <>
      <path d="M5 20c0-9 5-15 15-15 0 10-6 15-15 15z" />
      <path d="M5 20l8-8" />
    </>
  ),
  ajuste: (
    <>
      <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  edificio: (
    <>
      <path d="M5 21V4h10v17M15 9h4v12M3 21h18" />
      <path d="M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1" />
    </>
  ),
  gota: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  camara: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
} satisfies Record<string, ReactNode>

export type NombreIcono = keyof typeof TRAZOS

type IconoProps = {
  nombre: NombreIcono
  className?: string
}

export function Icono({ nombre, className = 'size-6' }: IconoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {TRAZOS[nombre]}
    </svg>
  )
}
