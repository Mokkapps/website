import './src/styles/main.css';
import 'prismjs/themes/prism.css';

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
