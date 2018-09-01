import React from 'react';

import './Hero.scss';

export default ({ text, ariaLabel, emoji }) => (
  <div className="hero__characteristics-item">
    <p>{text}</p>
    <div class="hero__characteristics-item-overlay">
      <span
        class="hero__characteristics-item-overlay-content"
        role="img"
        aria-label={ariaLabel}
      >
        {emoji}
      </span>
    </div>
  </div>
);
