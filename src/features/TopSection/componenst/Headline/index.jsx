import React from 'react';
import Button from '../../../common/Button';
import HoverCard from './components/HoverCard';

import './index.scss';

const Headline = () => {
  return (
    <section className="headline">
      <div className="hover-card">
        <HoverCard className="hover-card__base">
          <h1 className="hover-card__title">ETH/USDT</h1>
          <p className="hover-card__description">Short</p>
          <h2 className="hover-card__percent">+141%</h2>
        </HoverCard>
        <HoverCard className="hover-card__top">
          <h1 className="hover-card__title">ETH/USDT</h1>
          <p className="hover-card__description">Short</p>
          <h2 className="hover-card__percent">+116%</h2>
        </HoverCard>
      </div>

      <div className="headline__content">
        <h1 className="headline__title">Моментально копируй сделки профи трейдеров</h1>
        <p className="headline__description">
          Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом
          режиме.
        </p>
        <div className="headline__search">
          <div className="search">
            <input className="search__input" type="email" placeholder="Ваш e–mail" />
            <Button className="search__btn" text={'Начать'} />
          </div>
          <p className="search__description">5 дней бесплатного пользования</p>
        </div>
      </div>
    </section>
  );
};

export default Headline;
