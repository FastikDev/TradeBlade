import React from 'react';
import clsx from 'clsx';

const Button = ({ className, text, onClick = null, span = '' }) => {
  return (
    <button className={clsx('btn', className)} onClick={onClick}>
      <>
        {text}
        <span className={`${className}__text`}>{span}</span>
      </>
    </button>
  );
};

export default Button;
