import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-oodf9a text-white py-2 px-6 rounded md:ml-8 hover:bg-O47a56 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button