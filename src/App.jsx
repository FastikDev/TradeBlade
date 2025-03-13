import React, { useState } from 'react';
import Menu from './features/TopSection/componenst/Header/components/Menu';
import TopSection from './features/TopSection';
import Numbers from './features/Numbers';
import Online from './features/Online';
import About from './features/About';
import TradeBladeIs from './features/TradeBladeIs';
import HowToStart from './features/HowToStart';
import Prices from './features/Prices';
import Comments from './features/Comments';
import FAQ from './features/FAQ';
import Trial from './features/common/Trial';
import Footer from './features/Footer';
import Poligon from './features/common/Poligon';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="page">
      <TopSection onOpen={onOpen} />
      <Numbers />
      <Online />
      <Poligon />
      <About />
      <TradeBladeIs />
      <HowToStart />
      <Prices />
      <Comments />
      <FAQ />
      <Trial
        className="trial"
        title={`Начните прямо сейчас с бесплатным 
5–ти дневным пробным периодом!`}
        text={'Зарегистрироватся'}
      />
      <Footer />
      {isOpen && <Menu onClose={onClose} />}
    </div>
  );
};

export default App;
