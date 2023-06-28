import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import Button from './Button';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { isAuthenticated, logout, user } = useAuth();

  let Links = [
    { name: "INICIO", link: "/" },
    { name: "SERVICIOS", link: "/servicios" },
    { name: "CONTACTO", link: "/contacto" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="cursor-pointer flex items-center w-full text-3xl font-bold text-[#00df9a]">
          <Link to="/">Nova Medical Manager.</Link>
        </h1>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          {isAuthenticated ? (
            <>
              <Button>
                <Link to="/" onClick={() => { logout(); }}>
                  Salir
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button>
                <Link to="/login">Acceder</Link>
              </Button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;