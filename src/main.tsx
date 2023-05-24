import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DrawerProvider } from './context/drawer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DrawerProvider>
    <App />
  </DrawerProvider>
)
