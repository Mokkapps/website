import React, { useContext } from 'react';
import styled from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import Header from '../Header';
import Menu from '../Menu';
import localEng from '../../messages/en.json';
import localDe from '../../messages/de.json';
import LanguageProvider, {
  LanguageContext,
} from '../../context/languageContext';
import { ThemeContext } from '../../context/themeContextProvider';

const Container = styled.div`
  padding: 1rem 1rem 1rem 1rem;
`;

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <LanguageProvider>
      <LanguageContext.Consumer>
        {({ lang }) => (
          <IntlProvider
            locale={lang}
            messages={lang === 'en' ? localEng : localDe}
          >
            <Container
              className={`${
                theme === 'light' ? 'theme-light' : 'theme-dark'
              } bg-background text-main-text`}
            >
              <ScrollUpButton />
              <div>
                <div className="mb-3">
                  <Header>
                    <Menu />
                  </Header>
                </div>
                {children}
              </div>
            </Container>
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
