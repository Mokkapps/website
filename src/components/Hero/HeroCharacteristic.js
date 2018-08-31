import React from 'react';

import './Hero.scss';

export default ({ text, ariaLabel, emoji }) => (
  <li className="hero--characteristics-item">
    <span role="img" aria-label={ariaLabel} style={{ marginRight: '.5em' }}>
      {emoji}
    </span>
    {text}
  </li>
);
