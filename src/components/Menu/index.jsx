import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import menuItems from 'content/meta/menu';
import HeaderLogo from '../HeaderLogo';

import { MokkappsRed } from '../../styles/variables';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 712px) {
    margin-top: 0.5rem;
    justify-content: flex-start;
  }
`;

const Item = styled.li`
  padding: 0 5px;
  line-height: 1;

  .active {
    color: ${MokkappsRed};
  }

  a {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    color: white;

    &:hover {
      color: ${MokkappsRed};
      text-decoration: none;
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
  display: none;
  margin-left: 0.5rem;

  @media (max-width: 1240px) {
    display: block;
  }
`;

const Menu = () => (
  <Container>
    <HeaderLogo />
    <MenuItems>
      {menuItems.map(item => {
        const { ariaLabel, label, to, icon: Icon, linkProps } = item;

        return (
          <Item key={ariaLabel}>
            <Link
              to={to}
              title={label}
              aria-label={ariaLabel}
              activeClassName="active"
              {...linkProps}
            >
              <ItemContainer>
                {Icon && <Icon />}
                <ItemTitle>{label}</ItemTitle>
              </ItemContainer>
            </Link>
          </Item>
        );
      })}
    </MenuItems>
  </Container>
);

export default Menu;