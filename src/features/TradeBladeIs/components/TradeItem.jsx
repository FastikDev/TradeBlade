import React from 'react';

const TradeItem = ({ logo, title, text }) => {
  return (
    <div className="trade__item">
      <img className="trade__logo" src={logo} alt="logo" />
      <div className="trade__text">
        <h4 className="trade__title">{title}</h4>
        <p className="trade__description">{text}</p>
      </div>
    </div>
  );
};

export default TradeItem;
