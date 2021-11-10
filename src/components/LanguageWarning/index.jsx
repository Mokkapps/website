import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { LanguageContext } from '../../context/languageContext';

function LanguageWarning({ className, type }) {
  const { lang } = useContext(LanguageContext);

  const warningIcon = <span role="img" aria-label="Warning">⚠️</span>;

  return (
    lang === 'de' && (
      <p className={`${className} text-center alert alert-warning`}>
        {warningIcon} {type} sind nur in English verfügbar
      </p>
    )
  );
}

LanguageWarning.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default LanguageWarning;
