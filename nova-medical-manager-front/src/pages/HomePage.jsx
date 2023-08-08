import React, { useState } from 'react';
import WhyYouNeed from '../components/WhyYouNeed';
import WhatIs from '../components/WhatIs';
import WhyMe from '../components/WhyMe';
import Services from '../components/Services';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import ContactForm from '../components/ContactForm';

function HomePage() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    // Lógica para enviar el formulario aquí
    // Supongamos que el envío del formulario es exitoso
    setFormSubmitted(true);

    // Cerrar el mensaje después de 3 segundos
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

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
      {isFormSubmitted && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow-md">
            ¡Formulario enviado correctamente!
          </div>
        </div>
      )}
      <ContactForm onSubmitSuccess={handleFormSubmit} />
      <Footer/>
    </>
  );
}

export default HomePage;
