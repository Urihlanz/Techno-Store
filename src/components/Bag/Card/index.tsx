import React from 'react';

import { useAction } from '../../../hooks/useAction';
import { ProductStateTypes } from '../../../types/product';
import {
  Button,
  Container,
  Image,
  Inner,
  Price,
  Titlte,
  Wrapper,
} from './styles';

type CardProps = {
  product: ProductStateTypes;
};

const Card: React.FC<CardProps> = ({ product }) => {
  const { removeProduct } = useAction();

  const removeProductHandler = (): void => {
    removeProduct(product);
  };

  return (
    <Wrapper>
      <Inner>
        <Image image={product.thumbnail} />
        <Container>
          <Titlte>{product.title}</Titlte>
          <Price>{product.price}$</Price>
        </Container>
      </Inner>
      <Button onClick={(): void => removeProductHandler()}>
        Удалить из корзины
      </Button>
    </Wrapper>
  );
};

export default Card;
