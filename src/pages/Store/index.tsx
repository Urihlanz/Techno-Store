import React from 'react';

import Header from '../../components/Header';
import Greeting from '../../components/Store/Greeting';
import Sell from '../../components/Store/Sell';

const Bag: React.FC = () => {
  return (
    <div>
      <Greeting />
      <Sell />
    </div>
  );
};

export default Bag;
