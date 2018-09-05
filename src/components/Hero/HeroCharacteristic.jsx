import React from 'react';

import './Hero.scss';

export default ({ text, icon }) => {
  const Icon = icon;
  return (
    <div className="hero__characteristics-item">
      {Icon && <Icon className="hero__characteristics-item-icon" />}
      <p className="hero__characteristics-item-text">{text}</p>
    </div>
  );
};
