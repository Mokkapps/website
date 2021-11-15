import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import BuyMeACoffeeButton from '../BuyMeACoffeeButton';
import SocialLinks from '../SocialLink/SocialLinks';
import NewsletterSubscription from '../NewsletterSubscription';

const Footer = () => (
  <footer className="relative flex flex-shrink-0 flex-col items-center justify-center py-8">
    <SocialLinks
      className="flex flex-wrap justify-center"
      dataCy="footer-social-links"
    />
    <div className="flex w-80 my-4">
      <NewsletterSubscription minimal dataCy="footer-newsletter-subscription" />
    </div>
    <div className="flex flex-col sm:flex-row my-4">
      <BuyMeACoffeeButton dataCy="footer-buy-coffee-button" />
    </div>
    <div className="text-center text-text-main">
      <a
        href="https://github.com/Mokkapps/website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="footer.built" />
      </a>{' '}
      <FormattedMessage id="footer.with" /> &hearts;{' '}
      <FormattedMessage id="footer.using" />{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby.js
      </a>{' '}
      |{' '}
      <Link data-cy="footer-privacy-policy" to="/privacy-policy">
        <FormattedMessage id="footer.privacyPolicy" />
      </Link>{' '}
      |{' '}
      <Link data-cy="footer-legal-notice" to="/legal-notice">
        <FormattedMessage id="footer.legalNotice" />
      </Link>
    </div>
  </footer>
);

export default Footer;
