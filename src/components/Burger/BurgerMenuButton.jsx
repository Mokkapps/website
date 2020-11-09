import React from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';

export const StyledBurger = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--burger-menu-button);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const BurgerMenuButton = ({ open, setOpen, className }) => {
  return (
    <StyledBurger
      className={className}
      aria-label="Burger Menu"
      open={open}
      onClick={() => setOpen(!open)}
      data-cy="burger-menu-button"
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

BurgerMenuButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
  className: string,
};

export default BurgerMenuButton;
