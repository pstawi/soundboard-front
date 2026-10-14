import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

// Point d'entrée de l'application React.
// On récupère l'élément HTML avec l'id "root" et on y affiche le composant App.
createRoot(document.getElementById('root')).render(
  // StrictMode active des vérifications complémentaires en développement.
  <StrictMode>
    <App />
  </StrictMode>,
)
