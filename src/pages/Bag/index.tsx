import React from 'react';

import Card from '../../components/Bag/Card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Wrapper } from './styles';

const Store: React.FC = () => {
  const { bag } = useTypedSelector((state) => state.bag);

  return (
    <Wrapper>
      {bag.length
        ? bag.map((product) => {
            return <Card key={product.id} product={product} />;
          })
        : 'Корзина пуста'}
    </Wrapper>
  );
};

export default Store;
