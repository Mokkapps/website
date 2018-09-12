import React from 'react';
import PropTypes from 'prop-types';

const Author = props => {
  const { html } = props;

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

Author.propTypes = {
  html: PropTypes.string,
};

export default Author;
