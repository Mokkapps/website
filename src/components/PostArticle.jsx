import React from 'react';
import { css } from 'emotion';

import Article from '@react-website-themes/default/components/Article';

const articleStyle = css`
  background: white;
  color: black;
  border-radius: 10px;
  margin: auto;
  padding: 2rem;
  min-width: 60%;
  h1, h2, h3, h4, h5, h6, p, ul, li {
      color: black;
  }
`;

export default ({ children }) => (
  <Article customStyle={articleStyle}>{children}</Article>
);
