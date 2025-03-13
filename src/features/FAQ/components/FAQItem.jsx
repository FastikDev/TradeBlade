import React, { useState } from 'react';

const FAQItem = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={`faq__item ${isOpen ? 'faq__item_open' : ''}`} onClick={toggleFAQClick}>
      <div className="faq__container">
        <h4 className="faq__title">{title}</h4>
        <i className={`fa-solid fa-angle-down faq__icon ${isOpen ? 'faq__icon_open' : ''}`}></i>
      </div>
      {isOpen && <p className="faq__description">{text}</p>}
    </div>
  );
};

export default FAQItem;
