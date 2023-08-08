import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import Button from './Button';
import { Link } from 'react-router-dom';

import { chevronDownOutline } from 'ionicons/icons'; // Importa el icono "caret-down"

const serviceLinks = [
  { name: "Community Manager", link: "/servicios/community-manager" },
  { name: "Estrategia de Contenido", link: "/servicios/estrategia-contenidos" },
  { name: "Asesoría Digital", link: "/servicios/asesoria-digital" },
  { name: "Formaciones", link: "/servicios/formacion" },
];

const Nav = () => {
  const { isAuthenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const [showServiceLink, setShowServiceLink] = useState(false);

  const handleMobileMenuToggle = () => {
    setOpen(!open);
  };

  const handleServiceMenuToggle = () => {
    setShowServiceMenu(!showServiceMenu);
  };

  const handleServiceLinkToggle = () => {
    setShowServiceLink(!showServiceLink);
  };

  const handleServiceMenuClose = () => {
    setShowServiceMenu(false);
  };

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className="bg-white flex justify-between items-center h-24 mx-auto px-4">
          <div
            onClick={handleMobileMenuToggle}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
              open ? 'top-20' : '-top-96'
            }`}
          >
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to="/"
                onClick={handleMobileMenuToggle}
                className="relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fed049 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li
              className={`md:ml-8 text-xl md:my-0 my-7 ${
                (showServiceMenu || showServiceLink) ? "relative group" : ""
              }`}
            >
              <Link
                to="/servicios"
                onClick={handleServiceMenuToggle}
                onMouseEnter={handleServiceLinkToggle}
                onMouseLeave={handleServiceLinkToggle}
                className="relative group flex items-center" // Agrega flex items-center para alinear el ícono
              >
                Servicios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fed049 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                <ion-icon
                  icon={chevronDownOutline} // Usa el icono "chevron-down-outline"
                  style={{
                    color: "bg-fcbe08"
                  }}                />
              </Link>
              {showServiceMenu && (
                <ul
                  className="absolute bg-white p-6 space-y-6 w-64"
                  onMouseLeave={handleServiceMenuClose}
                >
                  {serviceLinks.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.link}
                        onClick={handleMobileMenuToggle}
                        className="relative group"
                      >
                        {service.name}
                        <span
                          className="absolute bottom-0 left-0 w-full h- bg-fed049"
                        ></span> {/* Elemento span con la clase de borde */}                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to="/contacto"
                onClick={handleMobileMenuToggle}
                className="relative group"
              >
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fed049 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>

            {/* Mostrar el botón de acceder solo en la versión móvil */}
            <li className="md:hidden">
              {isAuthenticated ? (
                <Button>
                  <Link to="/" onClick={() => { logout(); setOpen(false); }}>
                    Salir
                  </Link>
                </Button>
              ) : (
                <Button>
                  <Link to="/login" onClick={handleMobileMenuToggle}>
                    Acceder
                  </Link>
                </Button>
              )}
            </li>
          </ul>

          <h1 className="cursor-pointer flex items-center justify-center flex-1 text-3xl font-bold">
            <Link to="/">Nova Medical Manager.</Link>
          </h1>

          {/* Mostrar el botón de acceder solo en la versión de escritorio */}
          <div className="hidden md:block ml-auto">
            {isAuthenticated ? (
              <Button>
                <Link to="/" onClick={() => { logout(); setOpen(false); }}>
                  Salir
                </Link>
              </Button>
            ) : (
              <Button>
                <Link to="/login" onClick={handleMobileMenuToggle}>
                  Acceder
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
