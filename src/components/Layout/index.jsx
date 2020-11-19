import React, { useContext, useState } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import Menu from '../Menu';
import localEng from '../../messages/en.json';
import localDe from '../../messages/de.json';
import { LanguageContext } from '../../context/languageContext';
import { ThemeContext } from '../../context/themeContextProvider';
import BurgerMenu from '../Burger/BurgerMenu';
import BurgerMenuButton from '../Burger/BurgerMenuButton';
import HeaderLogo from '../HeaderLogo';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const devMode = process.env.NODE_ENV !== `production`;
  return (
    <IntlProvider locale={lang} messages={lang === 'en' ? localEng : localDe}>
      <section
        className={`${theme === 'light' ? 'theme-light' : 'theme-dark'} ${
          devMode ? 'debug-screens' : ''
        } bg-background text-main-text relative md:p-4 overflow-hidden lg:overflow-clip`}
      >
        <header className="lg:hidden flex justify-center p-4">
          <HeaderLogo />
        </header>
        <BurgerMenuButton className="lg:hidden" open={open} setOpen={setOpen} />
        <BurgerMenu className="lg:hidden" open={open} setOpen={setOpen} />
        <Menu className="hidden lg:flex mb-4" />
        {children}
        <ScrollUpButton />
      </section>
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
