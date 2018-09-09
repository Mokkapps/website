import React from 'react';
import styled from 'styled-components';

import { customMedia } from '../../utils/style-utils';

const Container = styled.div`
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #ecf0f1;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  ${customMedia.lessThan('sm')`
    width: 80px;
    height: 80px;
  `};

  ${customMedia.between('sm', 'md')`
    width: 100px;
    height: 100px;
  `};
`;

const Text = styled.p`
  color: black;
  white-space: pre-line;
  margin: 1rem 0 0;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  margin: auto;
  width: 100%;
  word-wrap: normal;

  ${customMedia.lessThan('sm')`
    font-size: .5rem;
  `};

  ${customMedia.between('sm', 'md')`
    font-size: .65rem;
  `};
`;

export default ({ text, icon }) => {
  const Icon = icon;

  const StyledIcon = styled(Icon)`
    width: 80px;
    height: 80px;
    margin: auto;

    ${customMedia.lessThan('md')`
      visibility: hidden;
      width: 0;
      height: 0;
      margin: 0 0 0 0;
    `};
  `;

  return (
    <Container>
      {Icon && <StyledIcon />}
      <Text>{text}</Text>
    </Container>
  );
};
