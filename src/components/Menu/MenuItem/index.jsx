import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage, injectIntl } from 'react-intl';

import './styles.scss'

const MenuItem = ({
  intl,
  className,
  to,
  ariaLabel,
  i18nId,
  linkProps,
  dataCy,
  isMobile = false,
}) => {
  const link = (
    <Link
      to={to}
      title={intl.formatMessage({ id: i18nId })}
      aria-label={ariaLabel}
      activeClassName="active"
      partiallyActive={to !== '/'}
      data-cy={dataCy}
      {...linkProps}
    >
      <div className="flex items-center content-center">
        <span>
          <FormattedMessage id={i18nId} />
        </span>
      </div>
    </Link>
  );

  return isMobile ? (
    <li className={`menu-item ${className}`}>{link}</li>
  ) : (
    <li className={`menu-item ml-12 mb-0 ${className}`}>{link}</li>
  );
};

MenuItem.propTypes = {
  intl: PropTypes.any.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  ariaLabel: PropTypes.string,
  i18nId: PropTypes.string,
  linkProps: PropTypes.object,
  dataCy: PropTypes.string,
};

export default injectIntl(MenuItem);
