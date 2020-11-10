import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--accent);
  text-align: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--basic-button-text);
  padding: 0.25rem 1.5rem;
  transition: all 0.3s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  outline: none;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const Button = ({ children, title, onClick, type, className, dataCy }) => (
  <StyledButton
    data-cy={dataCy}
    className={className}
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
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default Button;
