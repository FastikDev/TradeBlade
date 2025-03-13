import React, { useState } from 'react';
import Button from '../common/Button';
import './index.scss';
import PriceItem from './componets/PriceItem';

const Prices = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(prev => !prev);
  };

  const textBtn = isActive ? 'Фьючерс' : 'Спот';
  const textSwitch = isActive ? 'Спот' : 'Фьючерс';

  return (
    <section className="prices">
      <div className="prices__container">
        <h2 className="prices__title">Тарифы</h2>
        <div className="prices__switch switch">
          <Button
            className={`switch__btn ${isActive ? 'switch__btn_active' : ''}`}
            text={textBtn}
            onClick={toggleButton}
          />
          <span className={`switch__text ${isActive ? 'switch__text_active' : ''}`}>
            {textSwitch}
          </span>
        </div>
      </div>
      <div className="prices__cards price-card">
        <PriceItem className="standart" id={1} title="Standart" price="234" />
        <PriceItem className="vip" id={2} title="Vip" price="585" />
      </div>
    </section>
  );
};

export default Prices;
