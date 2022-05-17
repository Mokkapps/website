import './src/styles/main.scss';
import './src/styles/prism-vsc-dark-plus.scss';

import React from 'react';
import Root from './src/components/Root';

export const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>;
};
