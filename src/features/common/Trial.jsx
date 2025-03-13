import React from 'react';
import Button from './Button';

const Trial = ({ title, className, text }) => {
  return (
    <div className={className}>
      <h4 className={`${className}__title`}>{title}</h4>
      <div className={`${className}__search`}>
        <input className={`${className}__input`} type="email" placeholder="Ваш e–mail" />
        <Button className={`${className}__btn`} text={text} />
      </div>
    </div>
  );
};

export default Trial;
