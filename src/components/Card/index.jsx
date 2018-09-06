import React from 'react';

import './Card.scss';

const Card = ({ children, url, clickable }) => (
  <a href={url} className={`card ${clickable ? 'clickable' : ''}`}>
    {children}
  </a>
);

export default Card;
