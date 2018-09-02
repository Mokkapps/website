import React from 'react';

import './Card.scss';

const Card = ({ children, onClick, minimal }) => (
  <div onClick={() => onClick()} className={`card ${minimal ? 'minimal' : ''}`}>
    {children}
  </div>
);

export default Card;
