import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import ServicePage from "./pages/ServicePage";
import CommunityManagerPage from "./pages/CommunityManagerPage";
import DigitalConsultancePage from "./pages/DigitalConsultancePage";
import ContentSrategy from "./pages/ContentSrategy";
import ProtectedRoute from "./ProtectedRoute";
import TrainingPage from "./pages/TrainingPage";
import WhoImPage from "./pages/WhoImPage";
import AdminPage from "./pages/AdminPage";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registro' element={<RegisterPage />} />
          <Route path='/contacto' element={<WhoImPage/> } />
          <Route path='/servicios' element={<ServicePage/>} />
          <Route path='/servicios/community-manager' element={<CommunityManagerPage />} />
          <Route path='/servicios/asesoria-digital' element={<DigitalConsultancePage />} />
          <Route path='/servicios/estrategia-contenidos' element={<ContentSrategy />} />
          <Route path='/servicios/formacion' element={<TrainingPage /> } />
        
        <Route element={<ProtectedRoute/>}>
          <Route path='/perfil' element={<UserProfile/>} />
        </Route> 
        </Routes>
      </BrowserRouter>

    </AuthProvider>

  )
}

export default App
