import freelance from '../assets/img/freelance.jpg'
import WhyYouNeed from '../components/WhyYouNeed'
import WhatIs from '../components/WhatIs'
import WhyMe from '../components/WhyMe'
import CallYou from '../components/CallYou'
import Services from '../components/Services'
import Footer from '../components/Footer'

function HomePage() {
  return (
  <>
  <section class="flex justify-between items-center max-w-[1240px] mx-auto px-4 bg-center bg-no-repeat bg-gray-400 bg-blend-multiply" style={{ backgroundImage: `url(${freelance})` }}>
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Mejora tu contenido, deja de ser invisible en 
Redes Sociales.</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Para ser más visible, necesitas llegar a un público que de otra manera no
puedes llegar, y para eso están las estrategias en las redes sociales.


Si las grandes empresas han encontrado en las redes sociales la mejor forma de 
conectarse con sus clientes…


¡Tu no puedes quedarte atrás!</p>
        <div class=" flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-fed049 hover:bg-fcbe08 focus:ring-4">
                Contacta Conmigo
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                ¿Quién Soy?
            </a>  
        </div>
    </div>
    
</section>
<WhatIs/>
<WhyYouNeed/>
<WhyMe/>
<Services />
<Footer/>
  </>
    

  )
}

export default HomePage
