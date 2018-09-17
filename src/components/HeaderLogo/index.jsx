import React from 'react';
import styled from 'styled-components';

import logo from '../../images/icon.png';

const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-bottom: 0px;

  &:hover {
    text-decoration: none;
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 0px;
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: white;
  font-weight: bold;
  letter-spacing: 0.2em;
  font-size: 1.3em;
  margin-left: 0.1em;
  margin-bottom: 0px;
`;

const HeaderLogo = () => (
  <Anchor href="/">
    <Image src={logo} alt="Logo" />
    <Text>OKKAPPS</Text>
  </Anchor>
);

export default HeaderLogo;
