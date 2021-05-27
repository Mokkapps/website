import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import BuyMeACoffeeButton from '../BuyMeACoffeeButton';
import SocialLinks from '../SocialLink/SocialLinks';
import LinkButton from '../LinkButton';
import { sendCustomAnalyticsEvent } from '../../utils/helper';

const Footer = () => (
  <footer className="relative flex flex-shrink-0 flex-col items-center justify-center py-8">
    <SocialLinks
      className="flex flex-wrap justify-center"
      dataCy="footer-social-links"
    />
    <BuyMeACoffeeButton className="my-4" />
    <div className="flex mb-8 xl:mb-0 xl:absolute shadow-md rounded-md p-4 left-36 bottom-16 bg-secondary h-16 flex items-center">
      <LinkButton
        dataCy="footer-newsletter"
        href="/newsletter"
        i18nId="newsletterPage.joinTheNewsletter"
        onClick={() => sendCustomAnalyticsEvent('Clicked join the newsletter')}
      />
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
