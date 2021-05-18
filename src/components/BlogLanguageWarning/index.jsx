import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { LanguageContext } from '../../context/languageContext';

function BlogLanguageWarning({ className }) {
  const { lang } = useContext(LanguageContext);

  const warningIcon = <span role="img" aria-label="Warning">⚠️</span>;

  return (
    lang === 'de' && (
      <p className={`${className} text-center alert alert-warning`}>
        {warningIcon} Blog Artikel sind nur in English verfügbar
      </p>
    )
  );
}

BlogLanguageWarning.propTypes = {
  className: PropTypes.string,
};

export default BlogLanguageWarning;
