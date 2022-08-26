import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 650px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  border-radius: 47px;
`;

export const Image = styled.div<{ image: string }>`
  max-width: 1280px;
  max-height: 720px;
  width: 100%;
  height: 100%;
  background-image: url(${(props): string => props.image});
  background-size: cover;
  object-fit: cover;
  border-radius: 47px;
  margin-bottom: 10px;
`;

export const Titlte = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 17px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  background: #2077c7;
  border-radius: 26px;
  padding: 0 20px;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 1.2px;
  cursor: pointer;
`;
