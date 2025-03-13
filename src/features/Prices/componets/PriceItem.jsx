import React, { useState } from 'react';
import Button from '../../common/Button';
import clsx from 'clsx';
import { prisesList } from '../utils/config';

const PriceItem = ({ id, className, title, price }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState('12 месяцев');

  const toggleDropdown = event => {
    if (parseInt(event.currentTarget.id, 10) === id) {
      setIsOpen(prev => !prev);
    }
  };

  const handleItemChange = text => {
    setSelectedText(text);
    setIsOpen(true);
  };

  const displayList = id === 1 ? prisesList.slice(0, 4) : prisesList.filter((_, i) => i !== 3);

  return (
    <div className={clsx('item', className)}>
      <h3 className="item__title">{title}</h3>
      <ul className="item__list">
        {displayList.map(item => (
          <div className="item__li">
            <i className="fa-solid fa-check item__check"></i>
            <li key={item.id} className="item__text">
              {item.text}
            </li>
          </div>
        ))}
      </ul>
      <div className="item__container">
        <h3 className="item__price">
          {`$${price}`}
          <span className="item__percent">-35%</span>
        </h3>
        <div className="drop-down">
          <button className="drop-down__btn" id={id} onClick={toggleDropdown}>
            {selectedText}
            <i
              className={`fa-solid fa-angle-down ${isOpen ? 'drop-down__icon_open' : 'drop-down__icon'}`}
            ></i>
            {isOpen && (
              <ul className="drop-down__list">
                <li className="drop-down__item" onClick={() => handleItemChange('12 месяцев')}>
                  12 месяцев
                </li>
                <li className="drop-down__item" onClick={() => handleItemChange('6 месяцев')}>
                  6 месяцев
                </li>
                <li className="drop-down__item" onClick={() => handleItemChange('3 месяца')}>
                  3 месяца
                </li>
              </ul>
            )}
          </button>
        </div>
      </div>
      <Button className="item__btn" text={'Попробовать'} span={'5 дней бесплатно'} />
    </div>
  );
};

export default PriceItem;
