import React, { useEffect, useState } from 'react';

import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ProductStateTypes } from '../../../types/product';
import {
  Button,
  Cross,
  Description,
  Image,
  InfoSide,
  Layout,
  Rating,
  SliderButton,
  SliderButtonContainer,
  Title,
  ViuSide,
  Wrapper,
} from './styles';

type ModalProps = {
  product: ProductStateTypes;
  onSwitch: () => void;
};

const Modal: React.FC<ModalProps> = ({ product, onSwitch }) => {
  const slider = useTypedSelector((state) => state.slider);
  const { setIncrease, setDecrease, addProduct } = useAction();

  const images = product.images;

  const setIncreaseHandler = (): void => {
    setIncrease(images.length);
  };

  const setDecreaseHandler = (): void => {
    setDecrease(images.length);
  };

  const addProductHandler = (): void => {
    addProduct(product);
  };

  return (
    <Layout>
      <Wrapper>
        <InfoSide>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Rating>Rating: {product.rating}</Rating>
          <Button onClick={(): void => addProductHandler()}>Купить</Button>
        </InfoSide>
        <ViuSide>
          <Cross onClick={(): void => onSwitch()} />
          <Image src={images[slider]} />
          <SliderButtonContainer>
            <SliderButton onClick={(): void => setDecreaseHandler()}>
              Previous
            </SliderButton>
            <SliderButton onClick={(): void => setIncreaseHandler()}>
              Next
            </SliderButton>
          </SliderButtonContainer>
        </ViuSide>
      </Wrapper>
    </Layout>
  );
};

export default Modal;
