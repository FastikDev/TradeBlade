import React from 'react';
import logo from '../../../assets/card-logo.png';

const Card = ({ title, percent, target }) => {
  return (
    <div className="card">
      <img className="card__logo" src={logo} alt="logo" />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">
        <span className="card__type">Spot</span>· 1 мин. назад
      </p>
      <h4 className="card__profit">Прибыль</h4>
      <p className="card__percent">
        {`${percent}%`}
        <i className="fa-solid fa-arrow-up card__arrow"></i>
      </p>
      <div className="card__text">
        <span className="card__target">{`Цель ${target}`}</span>
        <span className="card__date">Дата входа 06.10.2022</span>
      </div>
    </div>
  );
};

export default Card;
