import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 80%;
  height: 350px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  border-radius: 47px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 40px;
  justify-content: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;

export const Image = styled.div<{ image: string }>`
  max-width: 320px;
  width: 100%;
  height: 100%;
  background-image: url(${(props): string => props.image});
  background-size: cover;
  object-fit: cover;
  border-radius: 47px;
  margin-bottom: 10px;
`;

export const Titlte = styled.h4`
  font-weight: 800;
  font-size: 34px;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 17px;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 15px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #c22f25;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  background: none;
  margin-right: 20px;
  height: 30px;
`;
