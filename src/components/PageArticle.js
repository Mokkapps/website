import React from 'react';
import { css } from 'emotion';

import Article from '@react-website-themes/default/components/Article';

const articleStyle = css`
  background: #333333;
  border-radius: 10px;
  margin: auto;
  padding: 2rem;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default ({ children }) => (
  <Article customStyle={articleStyle}>{children}</Article>
);
