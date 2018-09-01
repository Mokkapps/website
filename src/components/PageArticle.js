import React from 'react';
import { css } from 'emotion';

import Article from '@react-website-themes/default/components/Article';

const articleStyle = css`
  background: #333333;
  border-radius: 10px;
  padding: 2rem;
  min-width: 100%;
`;

export default ({ children }) => (
  <Article customStyle={articleStyle}>{children}</Article>
);
