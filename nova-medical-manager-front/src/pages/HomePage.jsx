import WhyYouNeed from '../components/WhyYouNeed';
import WhatIs from '../components/WhatIs';
import WhyMe from '../components/WhyMe';
import Services from '../components/Services';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';

function HomePage() {
  return (
  <>
    <LandingPage
        title="Mejora tu contenido y destaca en las redes sociales"
        description="Para ser más visible, necesitas llegar a un público al que de otra manera no puedes alcanzar. Descubre estrategias efectivas en las redes sociales para conectar con tu audiencia."
      />
    <WhatIs/>
    <WhyYouNeed/>
    <WhyMe/>
    <Services />
    <Footer/>
  </>
    

  )
}

export default HomePage
