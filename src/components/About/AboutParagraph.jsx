import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const AboutParagraph = ({ id, values, className }) => {
  return (
    <p className={`${className} text-justify`}>
      <FormattedMessage id={id} values={values} />
    </p>
  );
};

AboutParagraph.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  values: PropTypes.object,
};

export default AboutParagraph;
