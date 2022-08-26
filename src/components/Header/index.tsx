import React from 'react';
import { Link } from 'react-router-dom';

import { BagButton, Container, Logo, Wrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Link to='/'>Techno Store</Link>
        </Logo>
        <BagButton>
          <Link to='/bag'>Bag</Link>
        </BagButton>
      </Container>
    </Wrapper>
  );
};

export default Header;
