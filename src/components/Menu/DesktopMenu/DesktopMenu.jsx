import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl } from 'react-intl';

import menuItems from 'content/meta/menu';
import HeaderLogo from 'components/HeaderLogo';
import LanguageSwitcher from 'components/LanguageSwitcher';
import ThemeSwitch from 'components/ThemeSwitch';
import MenuItem from 'components/Menu/MenuItem';

const DesktopMenu = ({ intl, className }) => {
  return (
    <header
      className={`top-0 z-200 px-8 flex flex-wrap w-full justify-between items-center hidden lg:flex ${className}`}
      data-cy="header-menu"
    >
      <HeaderLogo />
      <ul className="flex items-center flex-wrap ml-0 mb-0 list-none ">
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
      </ul>
      <div className="flex">
        <LanguageSwitcher className="mr-4" />
        <ThemeSwitch className="" />
      </div>
    </header>
  );
};

DesktopMenu.propTypes = {
  intl: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default injectIntl(DesktopMenu);
