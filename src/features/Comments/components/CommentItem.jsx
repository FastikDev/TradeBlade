import React from 'react';

const CommentsItem = ({ logo, title, profit = 'Общую прибыль не афиширует', text }) => {
  return (
    <div className="comment__item">
      <img className="comment__avatar" src={logo} alt="avatar" />
      <div className="comment__text">
        <h4 className="comment__title">{`@${title}`}</h4>
        <div className="comment__profit">{profit}</div>
        <p className="comment__description">{text}</p>
      </div>
    </div>
  );
};

export default CommentsItem;
