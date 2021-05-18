import './src/styles/main.scss';
import './src/styles/prism-vsc-dark-plus.scss';

import React from 'react';
import ThemeContextProvider from './src/context/themeContextProvider';
import LanguageProvider from './src/context/languageContext';

export const wrapRootElement = ({ element }) => {
  return (
    <LanguageProvider>
      <ThemeContextProvider>{element}</ThemeContextProvider>
    </LanguageProvider>
  );
};
