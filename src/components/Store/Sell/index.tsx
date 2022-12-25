import React, { useEffect } from 'react';

import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Card from '../Card';
import { Container, Wrapper } from './styles';

const Sell: React.FC = () => {
  const { products, loading, error } = useTypedSelector(
    (state) => state.product
  );
  const { fetchProducts } = useAction();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Идет загрузка</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(products);

  return (
    <Wrapper>
      <Container>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Sell;
