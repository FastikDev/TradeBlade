import React from 'react';
import clsx from 'clsx';

const HoverCard = ({ className, children }) => {
  return <div className={clsx('hover-card__block', className)}>{children}</div>;
};

export default HoverCard;
