function TrainingProductTwo() {

    const cardsData = [
        {
          icon: 'M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z',
          title: 'Formación RRSS',
          description: 'Descubre cómo atraer y cautivar a tu público objetivo, convirtiendo seguidores en clientes leales  y generando mayores oportunidades de venta.',
        },
        {
          icon: 'M5.41 16H18a2 2 0 002-2 1 1 0 012 0 4 4 0 01-4 4H5.41l2.3 2.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 111.42 1.4L5.4 16zM6 8a2 2 0 00-2 2 1 1 0 01-2 0 4 4 0 014-4h12.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4L18.6 8H6z',
          title: 'Talleres',
          description: 'Aprende a diseñar publicaciones y anuncios irresistibles que capturen la atención de tu audiencia y generen interacción y participación.',
        },
      ];
    
      return (
        <section className="text-gray-600 body-font max-w-[1240px] mx-auto bg-[#CCA8D8] bg-opacity-30  backdrop-blur-md">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 text-gray-900">
                Además disponemos de cursos más completos y talleres 
              </h1>
            </div>
            <div className="flex flex-wrap  text-center m-auto">
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
  )
}

export default TrainingProductTwo
