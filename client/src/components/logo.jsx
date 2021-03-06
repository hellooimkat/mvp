import React from 'react';
import styled from 'styled-components';
import Image from './styles/imageStylings';
import logo from '../../public/icons/png/pet.png';

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  width: 40%
  height: 80%;
  padding-top: 3%;
`;

export default ({ onLogoClick }) => (
  <Title>
    <Image
      src={logo}
      type="logo"
      alt="logo"
      onClick={() => onLogoClick()}
    />
    Sheltr
  </Title>
);
