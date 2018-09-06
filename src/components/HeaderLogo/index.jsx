import React from 'react';

import logo from '../../images/icon.png';
import './HeaderLogo.scss';

const HeaderLogo = () => (
  <a className="header-logo__container" href="/">
    <img src={logo} alt="Logo" width="32" height="32" />
    <p className="header-logo__text">OKKAPPS</p>
  </a>
);

export default HeaderLogo;
