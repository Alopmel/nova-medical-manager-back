import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";

import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registro' element={<RegisterPage />} />
          <Route path='/quiensoy' element={<h1>¿Quién Soy?</h1>} />
          <Route path='/servicios' element={<h1>Servicios</h1>} />
        
        <Route element={<ProtectedRoute/>}>
          <Route path='/perfil' element={<UserProfile/>} />
        </Route> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
