import React from 'react';
import FAQItem from './components/FAQItem';
import { faqList } from './utils/config';

import './index.scss';

const FAQ = () => {
  return (
    <section className="faqs">
      <div className="faqs__container">
        <h2 className="faqs__title">Часто задаваемые вопросы</h2>
        <div className="faqs__list faq">
          {faqList.map(item => (
            <FAQItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
