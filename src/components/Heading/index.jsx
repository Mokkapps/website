import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Heading = props => {
  const { title, children, i18nId, className } = props;

  if (i18nId) {
    return (
      <header className={`${className} text-center mb-8`}>
        <h1>
          <FormattedMessage id={i18nId} />
        </h1>
      </header>
    );
  }

  return (
    <header className="text-center mb-8">
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  i18nId: PropTypes.string,
};

export default Heading;
