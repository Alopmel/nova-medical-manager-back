import React, { createContext, useState } from 'react';

const ServiceMenuContext = createContext();

export const ServiceMenuProvider = ({ children }) => {
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  return (
    <ServiceMenuContext.Provider value={{ showServiceMenu, setShowServiceMenu }}>
      {children}
    </ServiceMenuContext.Provider>
  );
};

export default ServiceMenuContext;