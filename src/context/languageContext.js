import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, lifecycle } from 'recompose';

export const LanguageContext = React.createContext('en');

const LanguageProvider = ({ children, lang, toggleLanguage }) => (
  <LanguageContext.Provider
    value={{ lang, toggleLanguage: () => toggleLanguage() }}
  >
    {children}
  </LanguageContext.Provider>
);

const enhance = compose(
  withState('lang', 'handleLanguage', 'en'),
  withHandlers({
    toggleLanguage:
      ({ lang, handleLanguage }) =>
      () => {
        if (lang === 'de') {
          handleLanguage('en');
          localStorage.setItem('lang', 'en');
        } else {
          handleLanguage('de');
          localStorage.setItem('lang', 'de');
        }
      },
  }),
  lifecycle({
    componentDidMount() {
      const localLang = localStorage.getItem('lang');
      if (localLang) {
        this.props.handleLanguage(localLang);
      } else {
        this.props.handleLanguage(navigator.language.split('-')[0]);
      }
    },
  })
);

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
  handleLanguage: PropTypes.func.isRequired,
};

export default enhance(LanguageProvider);
