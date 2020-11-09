import React from 'react';
import styled from 'styled-components';
import { bool, any, string } from 'prop-types';
import { Link } from 'gatsby';
import { FormattedMessage, injectIntl } from 'react-intl';

import menuItems from '../../content/meta/menu';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSwitch from '../ThemeSwitch';

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

  a {
    color: var(--burger-menu-text);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.4rem;
    background-image: linear-gradient(
      var(--burger-menu-text),
      var(--burger-menu-text)
    );
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.3s;
  }

  a:hover {
    color: var(--burger-menu-text);
    text-decoration: none;
    background-size: 100% 2px;
  }
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

const ItemTitle = styled.span`
  display: block;
  margin-left: 0.5rem;
`;

const BurgerMenu = ({ open, intl, className }) => {
  return (
    <StyledMenu open={open} className={className}>
      <div className="my-8 flex justify-center">
        <LanguageSwitcher className="mr-4" />
        <ThemeSwitch />
      </div>
      <UnorderedList>
        {menuItems.map(item => {
          const { ariaLabel, i18nId, to, icon: Icon, linkProps } = item;
          return (
            <li
              data-cy={`burger-menu-item-${i18nId.toLowerCase()}`}
              key={ariaLabel}
              className="mb-6"
            >
              <Link
                to={to}
                title={intl.formatMessage({ id: i18nId })}
                aria-label={ariaLabel}
                activeClassName="active"
                {...linkProps}
              >
                <ItemContainer>
                  {Icon && <Icon />}
                  <ItemTitle>
                    <FormattedMessage id={i18nId} />
                  </ItemTitle>
                </ItemContainer>
              </Link>
            </li>
          );
        })}
      </UnorderedList>
    </StyledMenu>
  );
};

BurgerMenu.propTypes = {
  open: bool.isRequired,
  intl: any.isRequired,
  className: string,
};

export default injectIntl(BurgerMenu);
