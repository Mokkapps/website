import React from 'react';
import styled from 'styled-components';

import { customMedia } from '../../utils/style-utils';

const StyledAnchor = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  color: black;
  background-color: white;
  border-color: black;
  border: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  transition: 0.25s;
  text-decoration: none;

  width: 240px;
  ${customMedia.lessThan('md')`
     width: 190px;
  `};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    background-color: lightgrey;
    color: black;
    text-decoration: none;
  }
`;

const Icon = styled.img`
  margin-right: 1rem;
  margin-bottom: 0;
  width: 25px;
  height: 25px;
`;

export default ({ url, icon }) => (
  <StyledAnchor href={url}>
    {' '}
    {icon ? (
      <Icon
        alt={`${url} link`}
        src={`https://unpkg.com/simple-icons@latest/icons/${icon}.svg`}
      />
    ) : null}
    GitHub
  </StyledAnchor>
);
