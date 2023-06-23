import { BrowserRouter, Routes, Route } from "react-router-dom"

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/quiensoy' element={<h1>¿Quién Soy?</h1>} />
        <Route path='/servicios' element={<h1>Servicios</h1>} />
        <Route path='/perfil' element={<h1>Perfil</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
