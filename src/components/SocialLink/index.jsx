import React from 'react';
import styled from 'styled-components';

import { MokkappsRed } from '../../styles/variables';

const StyledAnchor = styled.a`
  align-items: center;
  background: white;
  border-radius: 100%;
  display: flex;
  align-content: center;
  padding: 0.5rem;
  margin-right: 1rem;

  &:hover {
    background: ${MokkappsRed};
    transform: scale(1.1, 1.1);
  }
`;

const Image = styled.img`
  margin: 0 auto;
  width: 20px;
  height: 20px;
`;

const SocialLink = ({ href, iconName }) => (
  <StyledAnchor href={href} data-cy={`social-link-${iconName}`}>
    <Image
      alt={`Link to ${iconName}`}
      src={`https://unpkg.com/simple-icons@latest/icons/${iconName}.svg`}
    />
  </StyledAnchor>
);

export default SocialLink;
