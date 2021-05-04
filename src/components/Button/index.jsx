import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  &:hover {
    filter: brightness(90%);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Button = ({
  children,
  title,
  onClick,
  type,
  className,
  dataCy,
  secondary,
  block,
}) => (
  <StyledButton
    data-cy={dataCy}
    className={`${className} ${block ? 'w-full' : ''} ${
      secondary ? 'bg-black text-white' : 'bg-accent text-basic-button-text'
    } text-center rounded-md font-bold px-4 py-2 transition-all shadow-md dark:shadow-none outline-none min-h-50px`}
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
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default Button;
