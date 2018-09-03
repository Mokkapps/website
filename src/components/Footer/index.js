import React from 'react';

import './Footer.scss';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';

export default () => (
  <footer className="footer__container">
    <div className="footer__links">
      {config.socialLinks.map(link => (
        <SocialLink key={link.url} href={link.url} iconName={link.icon} />
      ))}
    </div>
    <div className="footer__content">
      <a href="https://github.com/Mokkapps/website">Built</a> with ❤️ using{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a> |{' '}
      <a href="privacy-policy">Privacy Policy</a> |{' '}
      <a href="legal-notice">Legal Notice</a>
    </div>
  </footer>
);
