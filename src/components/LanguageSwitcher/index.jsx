import React from 'react';

import { LanguageContext } from 'context/languageContext';
import PropTypes from 'prop-types';

const LanguageSwitcher = ({ className }) => {
  return (
    <LanguageContext.Consumer>
      {({ toggleLanguage, lang }) => (
        <select
          data-cy="language-switch"
          value={lang}
          onChange={toggleLanguage}
          className={`${className} outline-none`}
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      )}
    </LanguageContext.Consumer>
  );
};

LanguageSwitcher.propTypes = {
  className: PropTypes.string,
};

export default LanguageSwitcher;
