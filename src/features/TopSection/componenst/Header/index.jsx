import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Auth from './components/Auth';
import { tabs } from '../config/tabs';
import logo from '../../../../assets/logo.png';

import '../../styles/header.scss';

const Header = ({ onOpen }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabChange = id => {
    setActiveTab(id);
  };

  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <Navigation activeTab={activeTab} onTabClick={handleTabChange} className="header-nav" />
      <Auth className="header-auth" />
      <i className="fa-solid fa-bars header__menu" onClick={onOpen}></i>
    </header>
  );
};

export default Header;
