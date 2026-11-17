type OndasAguaProps = {
  className?: string
}

const RADIOS = [150, 230, 320, 420, 530] as const

// Ondas concéntricas, como una gota cayendo en el agua. Decorativas: toman el color de la marca activa.
export function OndasAgua({ className }: OndasAguaProps) {
  return (
    <svg viewBox="0 0 1200 1200" aria-hidden="true" focusable="false" fill="none" className={className}>
      {RADIOS.map((radio, i) => (
        <circle
          key={radio}
          cx={600}
          cy={600}
          r={radio}
          className="stroke-marca-accent"
          strokeWidth={1.5}
          strokeOpacity={0.3 - i * 0.05}
        />
      ))}
    </svg>
  )
}
