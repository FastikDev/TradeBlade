import React from 'react';
import Trial from '../common/Trial';

import './index.scss';

const About = () => {
  return (
    <section className="about">
      <div className="about__text">
        <h2 className="about__title">О компании</h2>
        <p className="about__description">
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным
          официальным брокером биржи Binance.
          <br /> <br /> Он представляет пользователям множество преимуществ, таких как более високая
          скорость синхронизации API и возможность создать учетную запись Binance через платформу
          TradeBlade всего в 1 клик.
        </p>
      </div>

      <Trial
        className="about-trial"
        title={`Попробуйте сейчас и получите
5 дней бесплатного пользования`}
        text={'Попробовать'}
      />
    </section>
  );
};

export default About;
