import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const HeaderLogo = ({ imageClassName }) => (
  <Anchor data-cy="header-logo" href="/">
    <img
      className={`${imageClassName} mb-0 py-2`}
      src={logo}
      title="Mokkapps Logo"
      alt="Mokkapps Logo"
      width={50}
      height={50}
    />
  </Anchor>
);

HeaderLogo.propTypes = {
  imageClassName: PropTypes.string,
};

export default HeaderLogo;
