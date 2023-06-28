import React from 'react'
import LandingPage from '../components/LandingPage'
import ManagerBenefits from '../components/ManagerBenefits'
import ManagerProduct from '../components/ManagerProduct'
import Footer from '../components/Footer'

function CommunityManager() {
  return (
    <>
        <LandingPage
        title="Community Manager"
        description="¿Quieres destacar en las redes sociales? Un Community Manager es el experto que gestionará tu presencia en las redes sociales. Con contenido atractivo, interacción constante y estrategias efectivas, te ayudará a construir una comunidad sólida y fortalecer la imagen de tu marca."
        />
        <ManagerBenefits/>
        <ManagerProduct/>
        <Footer/>
        
    </>
  )
}

export default CommunityManager