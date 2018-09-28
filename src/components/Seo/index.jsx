import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from 'content/meta/config';

const Seo = props => {
  const {
    url,
    language = 'en',
    title,
    description,
    image = config.siteLogo,
    postSEO,
  } = props;

  return (
    <Helmet
      htmlAttributes={{ lang: language, prefix: 'og: http://ogp.me/ns#' }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={postSEO ? 'article' : 'website'} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.authorName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

Seo.propTypes = {
  language: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Seo;
