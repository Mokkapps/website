import React from 'react';
import { Link } from 'gatsby';
import config from '../../content/meta/config';

const GoogleSearchLink = (props) => (
  <p {...props} style={{ textAlign: 'center' }}>
    You can search blog posts <a href={config.googleSearchUrl}>using Google</a>.
    Or browse a <Link to={'/minimal-blog-list'}>minimal list</Link> .
  </p>
);

export default GoogleSearchLink;
