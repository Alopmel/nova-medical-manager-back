import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import Button from './Button';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { name: "Community Manager", link: "/servicios/community-manager" },
  { name: "Estrategia de Contenido", link: "/servicios/estrategia-contenidos" },
  { name: "Asesoría Digital", link: "/servicios/asesoria-digital" },
  { name: "Formaciones", link: "/servicios/formacion" },
];

const Nav = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  useEffect(() => {
    const closeMenuOnLinkClick = () => {
      setOpen(false);
    };
    // Agregar un event listener para cerrar el menú en la versión móvil al hacer clic en un enlace
    document.querySelectorAll("ul.mobile-links > li > a").forEach((link) => {
      link.addEventListener("click", closeMenuOnLinkClick);
    });
    return () => {
      // Limpiar el event listener cuando el componente se desmonta
      document.querySelectorAll("ul.mobile-links > li > a").forEach((link) => {
        link.removeEventListener("click", closeMenuOnLinkClick);
      });
    };
  }, []);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className="bg-white flex justify-between items-center h-24 mx-auto px-4">
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
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 relative">
              <Link
                to="/servicios"
                onClick={() => setShowServiceMenu(!showServiceMenu)}
                onMouseEnter={() => setShowServiceMenu(true)}
                // Mover onMouseLeave al elemento ul que contiene el submenu
              >
                Servicios
              </Link>
              {showServiceMenu && (
                <ul
                  className="absolute bg-white p-6 space-y-6 w-64"
                  onMouseLeave={() => setShowServiceMenu(false)}
                >
                  {serviceLinks.map((service) => (
                    <li key={service.name}>
                      <Link to={service.link} onClick={() => setOpen(false)}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
            </li>

            {/* Mostrar el botón de acceder solo en la versión de escritorio */}
            <div className="hidden md:block">
              {isAuthenticated ? (
                <Button>
                  <Link to="/" onClick={() => { logout(); setOpen(false); }}>
                    Salir
                  </Link>
                </Button>
              ) : (
                <Button>
                  <Link to="/login" onClick={() => setOpen(false)}>Acceder</Link>
                </Button>
              )}
            </div>

          </ul>
        </div>
      </div>

      {/* Mostrar el botón de acceder solo en la versión móvil */}
      <div className="md:hidden px-4 mt-24">
        {isAuthenticated ? (
          <>
            <Button>
              <Link to="/" onClick={() => { logout(); setOpen(false); }}>
                Salir
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Button>
              <Link to="/login" onClick={() => setOpen(false)}>Acceder</Link>
            </Button>
          </>
        )}
      </div>

    </>
  );
};

export default Nav;
