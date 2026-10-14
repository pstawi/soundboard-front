import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

// Composant principal de l'application.
// Il configure le système de navigation et déclare les routes disponibles.
function App() {

  return (
    <>
      {/* BrowserRouter permet de gérer l'URL dans le navigateur. */}
      <BrowserRouter>
       <Routes>
        {/* Une route correspond à une URL et à son composant associé. */}
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App