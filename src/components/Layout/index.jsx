import React, { useContext, useState } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import Menu from '../Menu';
import localEng from '../../messages/en.json';
import localDe from '../../messages/de.json';
import LanguageProvider, {
  LanguageContext,
} from '../../context/languageContext';
import { ThemeContext } from '../../context/themeContextProvider';
import BurgerMenu from '../Burger/BurgerMenu';
import BurgerMenuButton from '../Burger/BurgerMenuButton';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <LanguageProvider>
      <LanguageContext.Consumer>
        {({ lang }) => (
          <IntlProvider
            locale={lang}
            messages={lang === 'en' ? localEng : localDe}
          >
            <section
              className={`${
                theme === 'light' ? 'theme-light' : 'theme-dark'
              } bg-background text-main-text relative md:p-4 overflow-hidden`}
            >
              <BurgerMenuButton open={open} setOpen={setOpen} />
              <BurgerMenu open={open} setOpen={setOpen} />
              <Menu />
              {children}
              <ScrollUpButton />
            </section>
          </IntlProvider>
        )}
      </LanguageContext.Consumer>
    </LanguageProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
