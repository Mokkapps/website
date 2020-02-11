import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../../content/meta/config';
import { Context } from '../Context';

const Seo = props => {
  const {
    url,
    title = config.baseName,
    description = config.description,
    image = `${window.location.origin}${config.defaultSeoImage}`,
    postSEO,
  } = props;

  return (
    <Context.Consumer>
      {({ lang }) => (
        <Helmet htmlAttributes={{ lang, prefix: 'og: http://ogp.me/ns#' }}>
          <title>{title}</title>
          <meta name="image" content={image} />
          <meta name="description" content={description} />
          {/* OpenGraph tags */}
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:type" content={postSEO ? 'article' : 'website'} />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={config.twitterUsername} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Helmet>
      )}
    </Context.Consumer>
  );
};

Seo.propTypes = {
  language: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  postSEO: PropTypes.bool,
};

export default Seo;
