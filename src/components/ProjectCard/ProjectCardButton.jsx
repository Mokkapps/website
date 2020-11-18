import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  color: var(--text-main);
  background-color: var(--secondary);
  border: 2px solid var(--text-main);
  border-radius: 0.5rem;
  background-size: 100% 0;
  transition: 0.25s;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--primary);
    color: var(--text-main);
    text-decoration: none;
    background-size: 100% 0;
  }
`;

const Icon = styled.img`
  margin-right: 1rem;
  margin-bottom: 0;
  width: 25px;
  height: 25px;
  color: var(--text-main);
  fill: var(--text-main);
`;

const ProjectCardButton = ({ url, icon }) => (
  <StyledAnchor href={url}>
    {' '}
    {icon ? (
      <Icon
        alt={`${url} link`}
        src={`https://unpkg.com/simple-icons@latest/icons/${icon}.svg`}
      />
    ) : null}
    GitHub
  </StyledAnchor>
);

ProjectCardButton.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCardButton;
