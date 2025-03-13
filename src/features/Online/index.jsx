import React from 'react';
import Card from './components/Card';
import { cardsList } from './utils/config.js';

import './index.scss';

const Online = () => {
  return (
    <section className="online">
      <h2 className="online__title">Прошедшие сделки</h2>
      <div className="online__status status">
        <div className="status__icon"></div>
        <span className="status__text">Онлайн</span>
      </div>
      <div className="cards">
        {cardsList.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Online;
