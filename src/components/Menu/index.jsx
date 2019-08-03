import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';

import menuItems from '../../content/meta/menu';
import HeaderLogo from '../HeaderLogo';
import { MokkappsRed } from '../../styles/variables';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
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
    color: white;

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
      background-color: ${MokkappsRed};
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

const Menu = ({ intl }) => (
  <Container data-cy="header-menu">
    <HeaderLogo />
    <MenuItems>
      {menuItems.map(item => {
        const { ariaLabel, i18nId, to, icon: Icon, linkProps } = item;

        return (
          <Item
            data-cy={`header-menu-item-${i18nId.toLowerCase()}`}
            key={ariaLabel}
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
          </Item>
        );
      })}
    </MenuItems>
  </Container>
);

Menu.propTypes = {
  intl: PropTypes.any.isRequired
};

export default injectIntl(Menu);

