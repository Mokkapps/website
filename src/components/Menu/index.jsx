import React from 'react';
import { Link } from 'gatsby';

import './Menu.scss';

import menuItems from 'content/meta/menu';

import HeaderLogo from '../HeaderLogo';

const Menu = () => (
  <div className="menu__container">
    <HeaderLogo />
    <ul className="menu__item-container">
      {menuItems.map(item => {
        const { ariaLabel, label, to, icon: Icon, linkProps } = item;

        return (
          <li className="menu__item" key={ariaLabel}>
            <Link
              to={to}
              title={label}
              aria-label={ariaLabel}
              activeClassName="active-item"
              {...linkProps}
            >
              <div className="menu__item-content">
                {Icon && <Icon />}
                <span className="menu__item-title">{label}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Menu;
