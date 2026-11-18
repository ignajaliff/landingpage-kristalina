'use client'

import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import { type Marca } from '@/lib/marcas'

// Estado compartido de la home, que actualizan las líneas ligadas al scroll (LineasServicios):
// - `llegadas`: secciones cuya línea ya llegó a su logo alguna vez (su texto se revela y queda visible).
// - `activo`: las líneas ya midieron la página. Hasta entonces todo el texto se ve: si el
//   JavaScript falla o tarda, la página queda completa (nunca con secciones vacías).

type Llegadas = Record<Marca, boolean>

type Progreso = {
  activo: boolean
  llegadas: Llegadas
}

type ProgresoContexto = Progreso & {
  reportar: (llegadas: Llegadas) => void
}

const NINGUNA: Llegadas = { kio: false, klean: false, katharos: false }

const Contexto = createContext<ProgresoContexto>({ activo: false, llegadas: NINGUNA, reportar: () => {} })

export function ProgresoServicios({ children }: { children: ReactNode }) {
  const [progreso, setProgreso] = useState<Progreso>({ activo: false, llegadas: NINGUNA })

  const reportar = useCallback((llegadas: Llegadas) => {
    setProgreso((previo) => {
      const igual =
        previo.activo && (Object.keys(llegadas) as Marca[]).every((m) => previo.llegadas[m] === llegadas[m])
      return igual ? previo : { activo: true, llegadas }
    })
  }, [])

  const valor = useMemo(() => ({ ...progreso, reportar }), [progreso, reportar])
  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>
}

export function useProgresoServicios() {
  return useContext(Contexto)
}
