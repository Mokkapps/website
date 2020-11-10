import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Heading = props => {
  const { title, children, i18nId } = props;

  if (i18nId) {
    return (
      <header className="text-center">
        <h1>
          <FormattedMessage id={i18nId} />
        </h1>
      </header>
    );
  }

  return (
    <header className="text-center">
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  i18nId: PropTypes.string,
};

export default Heading;
