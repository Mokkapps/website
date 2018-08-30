import React from 'react';
import { navigate } from 'gatsby';

import logo from '../images/icon.png';

export default () => (
  <div
    role="link"
    tabIndex="0"
    style={{
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      outline: 'none',
    }}
    onClick={() => navigate('./')}
  >
    <img src={logo} alt="Logo" width="32" height="32" />
    okkapps
  </div>
);
