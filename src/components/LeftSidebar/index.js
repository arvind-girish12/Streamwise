import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import StreamwiseLogo from '../../images/streamwise-logo.png'
import './style.scss';

const LeftSidebar = () => {
  const { isSidebarOpen } = useContext(GlobalContext);

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="streamwise-logo">
         <img src={StreamwiseLogo} />
         <span>Streamwise</span>
      </div>
      <nav>
        <NavLink to="/projects" className="nav-item" activeClassName="div-selected">
          Projects
        </NavLink>
        <NavLink to="/dashboard" className="nav-item" activeClassName="div-selected">
          Dashboard
        </NavLink>
        <NavLink to="/analytics" className="nav-item" activeClassName="div-selected">
          Analytics
        </NavLink>
        <NavLink to="/calendar" className="nav-item" activeClassName="div-selected">
          Calendar
        </NavLink>
      </nav>
    </div>
  );
};

export default LeftSidebar;
