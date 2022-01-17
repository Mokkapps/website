import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { LanguageContext } from 'context/languageContext';

function LanguageWarning({ className, type }) {
  const { lang } = useContext(LanguageContext);

  return (
    lang === 'de' && (
      <p className={`${className} text-center alert alert-warning`}>
        {type} sind nur in English verfügbar
      </p>
    )
  );
}

LanguageWarning.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default LanguageWarning;
