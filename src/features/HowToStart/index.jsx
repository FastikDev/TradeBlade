import React from 'react';
import StartItem from './components/StartItem';
import Button from '../common/Button';
import { startList } from './utils/config';

import './index.scss';

const HowToStart = () => {
  return (
    <section className="start">
      <h2 className="start__title">Как начать пользоваться сервисом</h2>
      <div className="start__content">
        <div className="start-list">
          {startList.map(item => (
            <StartItem key={item.id} {...item} />
          ))}
        </div>
        <Button className="start__btn" text={'Попробовать бесплатно'} />
      </div>
    </section>
  );
};

export default HowToStart;
