import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../../content/meta/config';
import { LanguageContext } from '../../context/languageContext';

const windowGlobal = typeof window !== 'undefined' && window;

const Seo = props => {
  const {
    url,
    canonical,
    title = config.baseNameWithTitle,
    description = config.description,
    image = `${windowGlobal?.location?.origin}${config.defaultSeoImage}`,
    postSEO,
  } = props;

  return (
    <LanguageContext.Consumer>
      {({ lang }) => (
        <Helmet htmlAttributes={{ lang, prefix: 'og: http://ogp.me/ns#' }}>
          <title>{title}</title>
          {canonical && (
            <link rel="canonical" key={canonical} href={canonical} />
          )}
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
    </LanguageContext.Consumer>
  );
};

Seo.propTypes = {
  language: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  image: PropTypes.string,
  postSEO: PropTypes.bool,
};

export default Seo;
