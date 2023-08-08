import React, { createContext, useState } from 'react';

const serviceLinks = [
  { name: "Community Manager", link: "/servicios/community-manager" },
  { name: "Estrategia de Contenido", link: "/servicios/estrategia-contenido" },
  { name: "Asesoría Digital", link: "/servicios/asesoria-digital" },
  { name: "Formaciones", link: "/servicios/formaciones" },
];

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  return (
    <ServiceContext.Provider value={{ showServiceMenu, setShowServiceMenu }}>
      {children}
    </ServiceContext.Provider>
  );
};
