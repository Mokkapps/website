import React from 'react';
import Menu from '@react-website-themes/default/components/Menu';
import { css } from 'emotion';

const customMenu = css`
  background: transparent;

  @media (min-width: 300px) {
    justify-content: flex-start;
    ul {
      flex-wrap: wrap;
    }
    li {
      margin-top: 1rem;
    }
  }

  @media (min-width: 1025px) {
    justify-content: flex-end;
  }

  ul li a {
    color: white;
  }

  a:hover {
    color: #fc1a20 !important;
  }
`;

export default ({ items }) => <Menu customStyle={customMenu} items={items} />;
