import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-fed049  py-2 px-6 rounded md:ml-8 hover:bg-fcbe08
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button