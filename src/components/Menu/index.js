import React from 'react';
import { Link } from 'gatsby';

import './Menu.scss';

import menuItems from 'content/meta/menu';

import HeaderLogo from '../HeaderLogo';

const Menu = () => (
  <div className="menu__container">
    <HeaderLogo />
    <ul className="menu__icons-container">
      {menuItems.map(item => {
        const { ariaLabel, to, icon: Icon, linkProps } = item;

        return (
          <li className="menu__icon" key={ariaLabel}>
            <Link
              to={to}
              title={ariaLabel}
              aria-label={ariaLabel}
              activeClassName="active-item"
              {...linkProps}
            >
              {Icon && <Icon />}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Menu;
