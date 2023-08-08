import React from 'react'
import LandingPage from '../components/LandingPage'
import CallYou from '../components/ContactForm'
import Footer from '../components/Footer'

function WhoImPage() {
  return (
    <>
        <LandingPage
        title="¿Quién Soy?"
        description="¿Quieres destacar en las redes sociales? Un Community Manager es el experto que gestionará tu presencia en las redes sociales. Con contenido atractivo, interacción constante y estrategias efectivas, te ayudará a construir una comunidad sólida y fortalecer la imagen de tu marca."
        />
        <CallYou/>
        <Footer/>
    </>
  )
}

export default WhoImPage
