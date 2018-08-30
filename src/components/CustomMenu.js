import React from 'react';
import Menu from '@react-website-themes/default/components/Menu';
import { css } from 'emotion';

const customMenu = css`
  background: #424242;
  ul li a {
    color: white;
  }
`;

export default ({ items }) => (
  <Menu customStyle={customMenu} items={items} />
);
