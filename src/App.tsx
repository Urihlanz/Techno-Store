import './styles/globals.scss';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useTypedSelector } from './hooks/useTypedSelector';
import Routes from './routes';

const App: React.FC = () => {
  const { products } = useTypedSelector((state) => state.product);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
