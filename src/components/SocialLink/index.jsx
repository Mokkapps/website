import React from 'react';

import './SocialLink.scss';

const SocialLink = ({ href, iconName }) => (
  <a href={href} className="social-link">
    <img
      alt={`Social Link to ${iconName}`}
      height={20}
      width={20}
      src={`https://unpkg.com/simple-icons@latest/icons/${iconName}.svg`}
    />
  </a>
);

export default SocialLink;
