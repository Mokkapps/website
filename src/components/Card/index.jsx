import React from 'react';

import './Card.scss';

const Card = ({ children, onClick, clickable }) => (
  <div onClick={() => onClick()} className={`card ${clickable ? 'clickable' : ''}`}>
    {children}
  </div>
);

export default Card;
