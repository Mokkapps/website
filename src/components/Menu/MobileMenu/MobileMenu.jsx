import React from 'react';
import styled from 'styled-components';
import { bool, any, string } from 'prop-types';
import { injectIntl } from 'react-intl';

import menuItems from 'content/meta/menu';
import LanguageSwitcher from 'components/LanguageSwitcher';
import ThemeSwitch from 'components/ThemeSwitch';
import MenuItem from 'components/Menu/MenuItem';

export const StyledMenu = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--background);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 99;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  width: 100vw;
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileMenu = ({ open, intl, className }) => {
  return (
    <StyledMenu open={open} className={className}>
      <div className="my-8 flex justify-center">
        <LanguageSwitcher className="mr-4" />
        <ThemeSwitch />
      </div>
      <UnorderedList>
        {menuItems.map(item => {
          const { ariaLabel, i18nId, to, icon, linkProps } = item;
          return (
            <MenuItem
              className="mb-6"
              key={ariaLabel}
              intl={intl}
              ariaLabel={ariaLabel}
              i18nId={i18nId}
              icon={icon}
              to={to}
              linkProps={linkProps}
              dataCy={`burger-menu-item-${i18nId.toLowerCase()}`}
              isMobile
            />
          );
        })}
      </UnorderedList>
    </StyledMenu>
  );
};

MobileMenu.propTypes = {
  open: bool.isRequired,
  intl: any.isRequired,
  className: string,
};

export default injectIntl(MobileMenu);
