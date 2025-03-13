import React from 'react';

const StartItem = ({ title, text }) => {
  return (
    <div className="start-list__item">
      <h4 className="start-list__title">{title}</h4>
      <p className="start-list__description">{text}</p>
    </div>
  );
};

export default StartItem;
