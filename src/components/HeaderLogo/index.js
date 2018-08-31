import React from 'react';
import { navigate } from 'gatsby';

import logo from '../../images/icon.png';
import './HeaderLogo.scss';

const HeaderLogo = () => (
  <div
    className="headerlogo--container"
    role="link"
    tabIndex="0"
    onClick={() => navigate('./')}
  >
    <img src={logo} alt="Logo" width="32" height="32" />
    <p className="headerlogo--text">OKKAPPS</p>
  </div>
);

export default HeaderLogo;
