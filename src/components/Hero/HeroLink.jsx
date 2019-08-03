import React from 'react';
import PropTypes from 'prop-types';

import './link-styles.scss';

const HeroLink = ({ children, href }) => (
  <a className="hero-link" href={href}>
    <span className="text">{children}</span>
    <span className="line -right" />
    <span className="line -top" />
    <span className="line -left" />
    <span className="line -bottom" />
  </a>
);

HeroLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default HeroLink;
