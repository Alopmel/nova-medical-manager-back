import { useState } from 'react';
import freelance from '../assets/img/freelance.jpg';
import Modal from './Modal';
import { Link } from 'react-router-dom';


function LandingPage({ title, description }) {
    const [showModal, setShowModal] = useState(false);

    const handleOnClose = () => setShowModal(false);

    return (
    <section className="flex justify-between items-center  mx-auto px-4 bg-center bg-no-repeat bg-gray-400 bg-blend-multiply" style={{ backgroundImage: `url(${freelance})` }}>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{description}</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <div 
           onClick={()=> setShowModal(true)}
           className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-fed049 hover:bg-fcbe08 focus:ring-4">
            Contacta Conmigo
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </div>          
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showModal}/>
    </section>
  );
}

export default LandingPage;