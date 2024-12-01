import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './style.scss';

const TopBar = () => {
  const { toggleSidebar } = useContext(GlobalContext);

  return (
    <div className="top-bar">
      <div className="menu-icon" onClick={toggleSidebar}>
        ☰
      </div>
      <div className="logo">Streamwise</div>
      <div className="profile-menu">
        <span className="menu-text">Menu</span>
        <div className="profile-icon">👤</div>
      </div>
    </div>
  );
};

export default TopBar;
