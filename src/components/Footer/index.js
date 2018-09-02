import React from 'react';

import './Footer.scss';

import SocialLink from '../SocialLink';

export default () => (
  <footer className="footer__container">
    <div className="footer__content">
      <a href="https://github.com/Mokkapps/website">Built</a> with ❤️ using{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a> |{' '}
      <a href="privacy-policy">Privacy Policy</a> |{' '}
      <a href="legal-notice">Legal Notice</a>
    </div>
    <div className="footer__links">
      <SocialLink href="https://github.com/mokkapps" iconName="github" />
      <SocialLink href="https://twitter.com/mokkapps" iconName="twitter" />
      <SocialLink href="https://dev.to/mokkapps" iconName="dev-dot-to" />
      <SocialLink
        href="https://www.linkedin.com/in/michael-hoffmann-3b8933b1"
        iconName="linkedin"
      />
    </div>
  </footer>
);
