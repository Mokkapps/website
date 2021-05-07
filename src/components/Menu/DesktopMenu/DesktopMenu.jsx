import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import menuItems from '../../../content/meta/menu';
import HeaderLogo from '../../HeaderLogo';
import LanguageSwitcher from '../../LanguageSwitcher';
import ThemeSwitch from '../../ThemeSwitch';
import MenuItem from "../MenuItem";

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 0;
  margin-bottom: 0;

  @media (max-width: 712px) {
    margin-top: 0.5rem;
    justify-content: flex-start;
  }
`;

const Item = styled.li`
  padding: 0 10px 0 0;
  line-height: 1;

  .active {
    &:after {
      transform: scaleX(1);
    }
  }

  a {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 0;
    color: var(--text-main);

    position: relative;
    text-decoration: none;
    background-size: 100% 0;

    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      transform: scaleX(0);
      background-color: var(--accent);
      transition: transform 0.3s;
    }

    &:hover {
      text-decoration: none;

      &:after {
        transform: scaleX(1);
      }
    }
  }

  svg {
    height: 30px;
  }
`;

const DesktopMenu = ({ intl, className }) => {
  return (
    <Header className={`hidden lg:flex ${className}`} data-cy="header-menu">
      <HeaderLogo />
      <MenuItems>
        {menuItems.map(item => {
          const { ariaLabel, i18nId, to, icon, linkProps } = item;

          return (
            <MenuItem
              key={ariaLabel}
              intl={intl}
              ariaLabel={ariaLabel}
              i18nId={i18nId}
              icon={icon}
              to={to}
              linkProps={linkProps}
              dataCy={`header-menu-item-${i18nId.toLowerCase()}`}
            />
          );
        })}

        <LanguageSwitcher className="mr-4 mb-2" />
        <ThemeSwitch className="mb-2" />
      </MenuItems>
    </Header>
  );
};

DesktopMenu.propTypes = {
  intl: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default injectIntl(DesktopMenu);
