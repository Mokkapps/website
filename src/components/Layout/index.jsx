import React from 'react';
import styled from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';
import PropTypes from 'prop-types';
import { Margin } from 'styled-components-spacing';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';

import Header from '../Header';
import LanguageSwitcher from '../LanguageSwitcher';
import Menu from '../Menu';
import localEng from '../../messages/en.json';
import localDe from '../../messages/de.json';
import { Context } from '../Context';
import Provider from './Provider';

addLocaleData(de, en);

const Container = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  background: #424242;
`;

const Layout = ({ children }) => {
  return (
    <Provider>
      <Context.Consumer>
        {({ lang }) => (
          <IntlProvider
            locale={lang}
            messages={lang === 'en' ? localEng : localDe}
          >
            <Container>
              <ScrollUpButton />
              <div>
                <Margin bottom={3}>
                  <Header>
                    <Menu />
                    <LanguageSwitcher />
                  </Header>
                </Margin>
                {children}
              </div>
            </Container>
          </IntlProvider>
        )}
      </Context.Consumer>
    </Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
