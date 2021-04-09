import './src/styles/main.scss';
import 'prismjs/themes/prism.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

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
