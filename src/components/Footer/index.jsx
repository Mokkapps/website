import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import BuyMeACoffeeButton from '../BuyMeACoffeeButton';
import SocialLinks from '../SocialLink/SocialLinks';

const Footer = () => (
  <footer className="flex flex-shrink-0 flex-col items-center justify-center py-8">
    <SocialLinks
      className="flex flex-wrap justify-center"
      data-cy="footer-social-links"
    />
    <BuyMeACoffeeButton className="my-4" />
    <div className="text-center text-text-main">
      <a
        href="https://github.com/Mokkapps/website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="built" />
      </a>{' '}
      <FormattedMessage id="with" /> &hearts; <FormattedMessage id="using" />{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby.js
      </a>{' '}
      |{' '}
      <Link data-cy="footer-privacy-policy" to="/privacy-policy">
        <FormattedMessage id="privacyPolicy" />
      </Link>{' '}
      |{' '}
      <Link data-cy="footer-legal-notice" to="/legal-notice">
        <FormattedMessage id="legalNotice" />
      </Link>
    </div>
  </footer>
);

export default Footer;
