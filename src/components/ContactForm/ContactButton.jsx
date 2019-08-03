import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components';

import { MokkappsRed } from '../../styles/variables';

const Button = styled.button`
  background: ${MokkappsRed};
  border: none;
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
  padding: 0.5rem 1.5rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const ContactButton = ({children}) => (
  <Button data-cy="contact-button">{children}</Button>
);

ContactButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContactButton;

