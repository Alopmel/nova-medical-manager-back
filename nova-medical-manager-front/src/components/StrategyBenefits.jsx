import React from 'react';


function StrategyBenefits() {
  const cardsData = [
    {
      icon: 'M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z',
      title: 'Crea contenido cautivador y relevante',
      description: 'Aprende a desarrollar publicaciones, artículos y materiales que capten la atención de tu audiencia',
    },
    {
      icon: 'M5.41 16H18a2 2 0 002-2 1 1 0 012 0 4 4 0 01-4 4H5.41l2.3 2.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 111.42 1.4L5.4 16zM6 8a2 2 0 00-2 2 1 1 0 01-2 0 4 4 0 014-4h12.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4L18.6 8H6z',
      title: 'Destaca en los motores de búsqueda',
      description: 'Descubre las técnicas y herramientas que te permitirán optimizar tu contenido para que aparezca en los primeros resultados de búsqueda',
    },
    {
      icon: 'M11 20v-2.08a6 6 0 01-4.24-3A4.02 4.02 0 012 11V6c0-1.1.9-2 2-2h2c0-1.1.9-2 2-2h8a2 2 0 012 2h2a2 2 0 012 2v5a4 4 0 01-4.76 3.93A6 6 0 0113 17.92V20h4a1 1 0 010 2H7a1 1 0 010-2h4zm6.92-7H18a2 2 0 002-2V6h-2v6c0 .34-.03.67-.08 1zM6.08 13A6.04 6.04 0 016 12V6H4v5a2 2 0 002.08 2zM8 4v8a4 4 0 108 0V4H8z',
      title: 'Convierte visitantes en clientes',
      description: ' Aprende a diseñar estrategias persuasivas que involucren a tus visitantes y los guíen a través del embudo de ventas ',
    },
    {
      icon: 'M17.62 10H20a2 2 0 012 2v8a2 2 0 01-2 2H8.5c-1.2 0-2.3-.72-2.74-1.79l-3.5-7-.03-.06A3 3 0 015 9h5V4c0-1.1.9-2 2-2h1.62l4 8zM16 11.24L12.38 4H12v7H5a1 1 0 00-.93 1.36l3.5 7.02a1 1 0 00.93.62H16v-8.76zm2 .76v8h2v-8h-2z',
      title: 'Construye una comunidad leal',
      description: 'Descubre cómo cultivar una base de seguidores comprometidos y fieles a través del contenido',
    },
  ];

  return (
    <section className="text-gray-600 body-font max-w-[1240px] mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 text-gray-900">
            ¿Cuáles son los beneficios de contar con una Esrategia de Contenido en tu equipo?
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {cardsData.map((card, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg h-full">
                <svg
                  fill="currentColor"
                  stroke="none"
                  className="text-gray-200 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d={card.icon}></path>
                </svg>
                <h2 className="title-font font-medium text-gray-900">{card.title}</h2>
                <p className="leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategyBenefits;