import React from 'react';

import './Footer.scss';

export default () => (
  // <Footer customStyle={style} copyright={copyright} />
  <footer className="footer__container">
    <div className="footer__content">
      <a href="https://github.com/Mokkapps/website">Coded</a> with ❤️ by {' '}
      <a href="https://www.mokkapps.de">Mokkapps</a> | Powered by{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a> |{' '}
      <a href="privacy-policy">Privacy Policy</a> |{' '}
      <a href="legal-notice">Legal Notice</a>
    </div>
  </footer>
);
