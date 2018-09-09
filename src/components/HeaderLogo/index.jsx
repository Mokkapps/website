import React from 'react';
import styled from 'styled-components';

import logo from '../../images/icon.png';

const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;

  &:hover {
    text-decoration: none;
  }
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: white;
  font-weight: bold;
  letter-spacing: 0.2em;
  font-size: 1.3em;
  margin-left: 0.1em;
`;

const HeaderLogo = () => (
  <Anchor href="/">
    <img src={logo} alt="Logo" width="32" height="32" />
    <Text>OKKAPPS</Text>
  </Anchor>
);

export default HeaderLogo;
