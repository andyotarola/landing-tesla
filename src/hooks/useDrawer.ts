import { useContext } from 'react'
import { DrawerContext } from '../context/drawer'

const useDrawer = () => {
  const context = useContext(DrawerContext)

  if (context === undefined) {
    throw new Error('No se puede usar el hook "useDrawer" fuera del provider "DrawerProvider"')
  }

  return context
}

export default useDrawer
