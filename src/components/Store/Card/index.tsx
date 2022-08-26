import React, { useState } from 'react';

import { ProductStateTypes } from '../../../types/product';
import Modal from '../Modal';
import { Button, Container, Image, Price, Titlte, Wrapper } from './styles';

type CardProps = {
  product: ProductStateTypes;
};

const Card: React.FC<CardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSwitch = (): void => {
    setShowModal(!showModal);
  };

  return (
    <Wrapper>
      {showModal ? <Modal product={product} onSwitch={onSwitch} /> : null}
      <Image image={product.thumbnail} />
      <Titlte>{product.title}</Titlte>
      <Container>
        <Price>{product.price}$</Price>
        <Button onClick={(): void => onSwitch()}>Подробнее</Button>
      </Container>
    </Wrapper>
  );
};

export default Card;
