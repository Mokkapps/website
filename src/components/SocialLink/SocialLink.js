import React from 'react';

import './SocialLink.scss';

export default ({ href, iconName }) => (
  <a href={href} className="social-link">
    <img
      alt={`Social Link to ${iconName}`}
      height={50}
      width={50}
      src={`https://unpkg.com/simple-icons@latest/icons/${iconName}.svg`}
    />
  </a>
);
