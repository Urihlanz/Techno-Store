import styled from 'styled-components';

export const Layout = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 70px;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  max-height: 80%;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 47px;
  padding: 30px;
  overflow: hidden;
`;

export const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  height: 100%;
`;

export const ViuSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 49%;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 1.125;
  font-weight: 600;
  letter-spacing: 0.004em;
  color: #000;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: #000;
  margin-bottom: 10px;
`;

export const Rating = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: #000;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 26px;
  padding: 0 20px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1.2px;
  width: 40%;
  background: #2077c7;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 47px;
  background-size: cover;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const Cross = styled.button`
  position: relative;
  right: 0;
  top: 0;
  width: 32px;
  height: 32px;
  background: none;
  margin-bottom: 5px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    top: 0;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #000;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const SliderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SliderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background: #2077c7;
  border-radius: 26px;
  padding: 0 20px;
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 1.2px;
  cursor: pointer;
`;
