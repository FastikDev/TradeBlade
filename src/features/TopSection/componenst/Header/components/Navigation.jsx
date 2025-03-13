import React from 'react';
import { tabs } from '../../config/tabs';

const Navigation = ({ activeTab, onTabClick, className }) => {
  return (
    <nav className={className}>
      {tabs.map(tab => (
        <a
          key={tab.id}
          href="#"
          className={`${className}__item ${activeTab === tab.id ? `${className}__item_selected` : ''}`}
          onClick={event => {
            event.preventDefault();
            onTabClick(tab.id);
          }}
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
