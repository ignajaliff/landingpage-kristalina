'use client'

import { type ReactNode } from 'react'
import { type Marca } from '@/lib/marcas'
import { useProgresoServicios } from './ProgresoServicios'

type RevelarConLineaProps = {
  marca: Marca
  className?: string
  children: ReactNode
  [dato: `data-${string}`]: string | undefined
}

// Bloque de texto de una sección de la home: aparece cuando su línea llega al logo y queda visible
// aunque se vuelva a subir. Base visible: solo se oculta cuando las líneas ya están activas.
export function RevelarConLinea({ marca, className = '', children, ...datos }: RevelarConLineaProps) {
  const { activo, llegadas } = useProgresoServicios()
  const oculto = activo && !llegadas[marca]

  return (
    <div
      className={`transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${oculto ? 'translate-y-[18px] opacity-0' : ''} ${className}`}
      {...datos}
    >
      {children}
    </div>
  )
}
