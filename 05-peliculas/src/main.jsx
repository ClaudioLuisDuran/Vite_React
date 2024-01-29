import './index.css'
// primer archivo que se carga en mi aplicacion.
// Primero, importar del react dom
import { createRoot } from 'react-dom/client'

// importamos la APP
import { App } from './App'

// ahora hago un getElement donde quiero renderizar mi aplicación
// createRoot > el Id lo saco del indez.html
createRoot(document.getElementById('app')).render(<App />)
