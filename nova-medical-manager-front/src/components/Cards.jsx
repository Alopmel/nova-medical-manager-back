import React from 'react'

function Card({ imgSrc, title, description }) {
    return (
      <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img src={imgSrc} className="w-10" width="512" height="512" alt="burger illustration" />
  
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
              {title}
            </h5>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <a
            href="#"
            className="flex justify-between items-center group-hover:text-yellow-600"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              -&gt;
            </span>
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;