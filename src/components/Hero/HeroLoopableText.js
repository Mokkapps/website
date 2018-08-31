import React from 'react';
import { navigate } from 'gatsby';

import './Hero.scss';

export default ({ children }) => (
  <span
    role="link"
    tabIndex={0}
    onKeyPress={() => {}}
    className="hero--loopable-text"
    onClick={() => navigate('./about')}
  >
    {children}
  </span>
);
