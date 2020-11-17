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
  margin: 1rem;
  user-select: none;
  transition: 0.25s;
`;

const Card = ({ children, url, id }) => (
  <Anchor className="roundend-sm hover:shadow-2xl transform hover:-translate-y-1 hover:text-primary" data-cy={`card-${id}`} href={url}>
    {children}
  </Anchor>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default Card;
