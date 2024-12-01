import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';

const GlobalState = ({ children }) => {
  // Global state variables
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Functions to manipulate the state
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
