import React from 'react'
import LandingPage from '../components/LandingPage'
import DigitalBenefits from '../components/DigitalBenefits'
import DigitalProduct from '../components/DigitalProduct'
import Footer from '../components/Footer'

function DigitalConsultance() {
  return (
    <>
        <LandingPage 
        title="Asesoría Digital"
        description="En un mundo cada vez más conectado, es crucial destacar en el vasto panorama digital. Nuestra asesoría digital te brinda las herramientas y estrategias necesarias para impulsar tu negocio en internet y alcanzar el éxito que mereces."
        />
        <DigitalBenefits />
        <DigitalProduct/>
        <Footer />
    </>
  )
}

export default DigitalConsultance