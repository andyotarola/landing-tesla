import { createContext, useState } from 'react'

export interface DrawerContextType {
  show: boolean
  close: () => void
  open: () => void
}

export const DrawerContext = createContext<DrawerContextType | null>(null)

export const DrawerProvider = ({ children }: { children: JSX.Element }) => {
  const [show, setShow] = useState(false)

  const open = () => {
    document.documentElement.style.overflow = 'hidden'
    setShow(true)
  }
  const close = () => {
    document.documentElement.style.overflow = ''
    setShow(false)
  }

  return (
    <DrawerContext.Provider
      value={{
        show,
        close,
        open
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
