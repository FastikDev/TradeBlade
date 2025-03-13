import React from 'react';
import Header from './componenst/Header';
import Headline from './componenst/Headline';

const TopSection = ({ onOpen }) => {
  return (
    <div>
      <Header onOpen={onOpen} />
      <Headline />
    </div>
  );
};

export default TopSection;
