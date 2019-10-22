import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { MokkappsRed } from '../../styles/variables';

const StyledButton = styled.button`
  background-color: ${MokkappsRed};
  border: 0.16em solid rgba(255, 255, 255, 0);
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
  padding: 0.25rem 1.5rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
    border-color: rgba(255, 255, 255, 1);
  }
`;

const Button = ({ children, title, onClick, type }) => (
  <StyledButton
    data-cy="contact-button"
    type={type || 'button'}
    title={title}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
