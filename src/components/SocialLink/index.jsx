import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as simpleIcons from 'simple-icons';

const StyledAnchor = styled.a`
  align-items: center;
  background: white;
  border-radius: 100%;
  display: flex;
  align-content: center;
  padding: 0.5rem;
  margin-right: 1rem;

  &:hover {
    background: var(--accent);
    transform: scale(1.1, 1.1);
  }
`;

const SvgWrapper = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
`;

const SocialLink = props => {
  const { url, ariaLabel, icon } = props.link;
  return (
    <StyledAnchor
      {...props}
      href={url}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      data-cy={`social-link-${icon}`}
    >
      {
        <SvgWrapper
          alt={icon}
          dangerouslySetInnerHTML={{
            __html: `${simpleIcons.get(icon).svg}`,
          }}
        />
      }
    </StyledAnchor>
  );
};

SocialLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default SocialLink;
