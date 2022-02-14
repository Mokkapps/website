import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

const StyledButton = styled.button`
  &:hover {
    filter: brightness(90%);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(90%);
  }
`;

const Button = ({
  disabled,
  children,
  title,
  onClick,
  type,
  className,
  dataCy,
  block,
  loading = false,
}) => (
  <StyledButton
    data-cy={dataCy}
    disabled={disabled}
    className={`${className} ${
      block ? 'w-full' : ''
    } flex items-center justify-center bg-button-background text-basic-button-text
    rounded-full font-bold px-4 py-2 transition-all shadow-md dark:shadow-none outline-none`}
    type={type || 'button'}
    title={title}
    onClick={onClick}
  >
    {loading ? (
      <TailSpin
        color="var(--accent)"
        height={20}
        width={20}
        className="mr-2"
      />
    ) : null}
    <span>{children}</span>
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default Button;
