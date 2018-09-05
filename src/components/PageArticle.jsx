import React from 'react';
import { css } from 'emotion';

import Article from '@react-website-themes/default/components/Article';

const articleStyle = css`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  min-width: 100%;
`;

const narrowArticleStyle = css`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  min-width: 50%;
`;

export default ({ children, narrow }) => (
  <Article customStyle={narrow ? narrowArticleStyle : articleStyle}>
    {children}
  </Article>
);
