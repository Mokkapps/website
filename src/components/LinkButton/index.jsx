import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const LinkButton = ({ dataCy, href, i18nId, className }) => (
  <div className={`${className} flex justify-center`} data-cy={dataCy}>
    <a className="text-2xl my-4" href={href}>
      <FormattedMessage id={i18nId} />
    </a>
  </div>
);

LinkButton.propTypes = {
  dataCy: PropTypes.string.isRequired,
  i18nId: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkButton;
