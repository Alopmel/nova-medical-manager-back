import Footer from "../components/Footer"
import LandingPage from "../components/LandingPage"
import Services from "../components/Services2"

function ServicePage() {
  return (
    <>
        <LandingPage
        title="Servicios"
        description="Para ser más visible, necesitas llegar a un público al que de otra manera no puedes alcanzar. Descubre estrategias efectivas en las redes sociales para conectar con tu audiencia."
        />
        <Services/>
        <Footer/>
    </>
  )
}

export default ServicePage