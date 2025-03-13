import React, { useState } from 'react';
import Navigation from './Navigation';
import Auth from './Auth';
import { tabs } from '../../config/tabs';

import '../../../styles/menu.scss';

const Menu = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = id => {
    setActiveTab(id);
  };

  return (
    <div className="menu">
      <button className="menu__btn-close" onClick={onClose} />
      <Navigation activeTab={activeTab} onTabClick={handleTabClick} className="menu-nav" />
      <Auth className="menu-auth" />
    </div>
  );
};

export default Menu;
