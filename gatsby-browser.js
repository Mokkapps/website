import './src/styles/main.css';
import 'prismjs/themes/prism.css';

import React from 'react';
import ThemeContextProvider from './src/context/themeContextProvider';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
