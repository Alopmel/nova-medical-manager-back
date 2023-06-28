import React from 'react'
import mujerImage from '../assets/img/mujer-movil.jpeg'

function WhatIs() {
  return (
    <div className='bg-white flex justify-between items-center max-w-[1240px] mx-auto px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] mx-auto my-24' src={mujerImage} alt='/' />
      <div className='flex flex-col justify-center'>
        <p className='text-[#3D5656] font-bold mt-16'>TITULO PRINCIPAL</p>
         {/*<div class="h-1 bg-yellow-500 w-20 ml-7 mt-2"></div> */} 
        <h1 className='text-[#68B984] md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-4'>¿Qué es Un Community Manager?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit
          dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
          eveniet ex deserunt fuga?          
        </p>
        <p className='mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit
          dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
          eveniet ex deserunt fuga?          
        </p>
        <button className=' bg-fed049 hover:bg-fcbe08 text-[#0f0f0f] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Quiero Saber Más</button>
      </div>
    </div>
  </div>
  )
}

export default WhatIs
