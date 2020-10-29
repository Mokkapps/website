import React from 'react';
import styled from 'styled-components';

import logo from '../../images/icon.png';

const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-bottom: 0;
  background-size: 100% 0;

  &:hover {
    text-decoration: none;
    background-size: 100% 0;
  }
`;

const Image = styled.img`
  margin-bottom: 0;
`;

const Text = styled.p`
  color: white;
  font-weight: bold;
  letter-spacing: 0.2em;
  font-size: 1.5em;
  margin-left: 0.25em;
  margin-bottom: 0;
`;

const HeaderLogo = () => (
  <Anchor data-cy="header-logo" href="/">
    <Image src={logo} alt="Logo" width={35} height={35} />
    <Text>OKKAPPS</Text>
  </Anchor>
);

export default HeaderLogo;
