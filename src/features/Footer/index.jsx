import React, { useState } from 'react';
import Navigation from '../TopSection/componenst/Header/components/Navigation';
import { tabs } from '../TopSection/componenst/config/tabs';
import logo from '../../assets/logo.png';

import './index.scss';

const Footer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = id => {
    setActiveTab(id);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Быстрая навигация</h2>
        <Navigation activeTab={activeTab} onTabClick={handleTabClick} className="footer-nav" />
      </div>
      <div className="footer__wrapper">
        <img className="footer__logo" src={logo} alt="logo" />
        <p className="footer__description">© 2022 TradeBlade. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
