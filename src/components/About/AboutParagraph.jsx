import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { baseFormattedMessageValues } from 'utils';

const AboutParagraph = ({ id, values, className }) => {
  return (
    <p className={`${className} text-justify`}>
      <FormattedMessage
        id={id}
        values={{ ...baseFormattedMessageValues, ...values }}
      />
    </p>
  );
};

AboutParagraph.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  values: PropTypes.object,
};

export default AboutParagraph;
