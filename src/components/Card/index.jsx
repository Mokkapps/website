import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Anchor = styled.a`
  max-width: 100%;
  width: 300px;
  min-width: 230px;
  min-height: 230px;
  display: flex;
  flex-flow: column;
  color: var(--accent);
  text-align: center;
  font-size: 1rem;
  letter-spacing: 2px;
  background-color: var(--secondary);
  background-image: none;
  border-radius: 0.25rem;
  margin: 1rem;
  user-select: none;
  transition: 0.25s;

  &:hover {
    box-shadow: 0 6px 14px -3px rgba(0, 0, 0, 0.75);
    transform: translateY(-0.2rem);
    text-decoration: none;
    color: var(--primary);
  }
`;

const Card = ({ children, url, id }) => (
  <Anchor data-cy={`card-${id}`} href={url}>
    {children}
  </Anchor>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default Card;
