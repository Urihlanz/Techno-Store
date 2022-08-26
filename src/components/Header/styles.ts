import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  position: fixed;
  height: 70px;
  width: 100%;
  padding: 0 15px;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1130px;
  width: 100%;
`;

export const Logo = styled.h3`
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;

  a {
    color: #fff;
  }
`;

export const BagButton = styled.button`
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
  text-transform: uppercase;
  background: none;
  cursor: pointer;

  a {
    color: #fff;
  }
`;
