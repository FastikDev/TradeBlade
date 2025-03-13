import React from 'react';
import { statisticsList } from './utils/config';

import './index.scss';

const Numbers = () => {
  return (
    <section className="numbers">
      <div className="numbers__block">
        <h3 className="numbers__title">Цифры</h3>
        <p className="numbers__date">Cентябрь 2022</p>
      </div>
      <div className="statistics">
        {statisticsList.map(item => (
          <div className="statistics__item" key={item.id}>
            <h3 className="statistics__title">{item.name}</h3>
            <p className="statistics__value">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
