import React from 'react'
import LandingPage from '../components/LandingPage'
import StrategyBenefits from '../components/StrategyBenefits'
import StrategyProduct from '../components/StrategyProduct'

function ContentSrategy() {
  return (
    <>
        <LandingPage
            title="Asesoría Digital"
            description="¿Quieres destacar en el mundo digital y captar la atención de tu audiencia? Nuestro curso te brinda las herramientas y conocimientos necesarios para crear una estrategia de contenidos efectiva y exitosa."
        />
        <StrategyBenefits />
        <StrategyProduct />
    </>
  )
}

export default ContentSrategy