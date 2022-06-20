import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import messages from 'lang/messages';
import LanguageProvider, { LanguageContext } from 'context/languageContext';
import ThemeContextProvider from 'context/themeContextProvider';

Root.propTypes = {
  children: PropTypes.node,
};

function Root(props) {
  // const [show, setShow, doNotShowAgain] = setShowEbookDialog();
  const { lang } = useContext(LanguageContext);

  return (
    <LanguageProvider>
      <ThemeContextProvider>
        <IntlProvider
          locale={lang}
          messages={lang === 'en' ? messages.english : messages.german}
        >
          {/*<EbookDialog*/}
          {/*  show={show}*/}
          {/*  onClose={() => setShow(!show)}*/}
          {/*  doNotShowAgain={() => doNotShowAgain()}*/}
          {/*/>*/}
          {props.children}
        </IntlProvider>
      </ThemeContextProvider>
    </LanguageProvider>
  );
}

export default Root;
