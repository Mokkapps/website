import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  align-items: center;
  background: white;
  border-radius: 100%;
  display: flex;
  align-content: center;
  padding: 0.5rem;
  margin: 1rem 1rem 0 0;

  &:hover {
    background: lightgrey;
    transform: scale(1.1, 1.1);
  }
`;

const Image = styled.img`
  margin: 0 auto;
  width: 20px;
  height: 20px;
`;

const SocialLink = ({ href, iconName }) => (
  <StyledAnchor href={href}>
    <Image
      alt={`Social Link to ${iconName}`}
      src={`https://unpkg.com/simple-icons@latest/icons/${iconName}.svg`}
    />
  </StyledAnchor>
);

export default SocialLink;
