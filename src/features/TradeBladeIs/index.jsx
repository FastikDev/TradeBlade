import React from 'react';
import TradeItem from './components/TradeItem';
import { tradesList } from './utils/config';

import './index.scss';

const TradeBladeIs = () => {
  return (
    <section className="trade-blade">
      <h2 className="trade-blade__title">Tradeblade это</h2>
      <div className="trade">
        {tradesList.map(item => (
          <TradeItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TradeBladeIs;
