import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';

const GlobalState = ({ children }) => {
  // Global state variables
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  // Functions to manipulate the state
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        projects,
        setProjects,
        activeProject,
        setActiveProject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
