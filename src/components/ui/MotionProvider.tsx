'use client'

import { type ReactNode } from 'react'
import { MotionConfig } from 'motion/react'

type MotionProviderProps = {
  children: ReactNode
}

// Respeta "reducir movimiento" del sistema en todas las animaciones del sitio
export function MotionProvider({ children }: MotionProviderProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
