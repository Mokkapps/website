import React from 'react';
import styled from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import Header from '../Header';
import Menu from '../Menu';
import localEng from '../../messages/en.json';
import localDe from '../../messages/de.json';
import { Context } from '../Context';
import Provider from './Provider';

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
      </Context.Consumer>
    </Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
