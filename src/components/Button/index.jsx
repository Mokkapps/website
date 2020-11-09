import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--accent);
  border: 0.16em solid rgba(255, 255, 255, 0);
  text-align: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  padding: 0.25rem 1.5rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
    border-color: rgba(255, 255, 255, 1);
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
