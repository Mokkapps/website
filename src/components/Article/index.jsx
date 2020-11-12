import React from 'react';
import PropTypes from 'prop-types';

const Article = props => {
  return (
    <article
      {...props}
      className="max-w-lg rounded-lg p-8 min-w-full xl:min-w-1/2 m-auto"
    >
      {props.children}
    </article>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
