import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  max-width: 100%;
  width: 300px;
  min-width: 230px;
  min-height: 230px;
  display: flex;
  flex-flow: column;
  background-color: #ecf0f1;
  border-radius: 0.25rem;
  margin: 1rem;
  user-select: none;
  transition: 0.25s;

  &:hover {
    box-shadow: 0px 6px 14px -3px rgba(0,0,0,0.75);
    transform: translateY(-0.2rem);
    text-decoration: none;
  }
`;

const Card = ({ children, url }) => <Anchor href={url}>{children}</Anchor>;

export default Card;
