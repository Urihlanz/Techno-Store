import styled from 'styled-components';

import Banner from './banner/bannerImage.jpg';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1000px;
  padding-top: 70px;
`;

export const Image = styled.div`
  max-width: 1280px;
  max-height: 720px;
  width: 100%;
  height: 100%;
  background-image: url(${Banner});
  background-size: cover;
  object-fit: cover;
  border-radius: 47px;
`;
