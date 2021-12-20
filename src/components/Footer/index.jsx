import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { FaRegCopyright } from 'react-icons/all';

import menu from '@content/meta/menu';
import SocialLinks from '@components/SocialLink/SocialLinks';
import NewsletterSubscription from '@components/NewsletterSubscription';
import Divider from '@components/Divider';

const Footer = () => (
  <footer className="relative flex flex-shrink-0 flex-col items-center justify-center px-4 md:px-96 py-4">
    <Divider />
    <div className="w-full flex flex-col md:flex-row justify-between mt-4">
      <div className="grid grid-cols-3 gap-4 mr-8">
        <div className="flex flex-col">
          <strong className="mb-2">General</strong>
          {menu.map(({ to, i18nId }) => (
            <Link key={i18nId} data-cy={`footer-general-${i18nId}`} to={to}>
              <FormattedMessage id={i18nId} />
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <strong className="mb-2">Extra</strong>
          <Link data-cy="footer-uses" to="/uses">
            <FormattedMessage id="footer.uses" />
          </Link>
          <Link data-cy="footer-newsletter" to="/newsletter">
            <FormattedMessage id="newsletterPage.newsletter" />
          </Link>
          <a
            data-cy="footer-newsletter"
            href="https://www.buymeacoffee.com/mokkapps"
          >
            <FormattedMessage id="general.buyMeACoffee" />
          </a>
        </div>
        <div className="flex flex-col">
          <strong className="mb-2">Legal</strong>
          <Link data-cy="footer-privacy-policy" to="/privacy-policy">
            <FormattedMessage id="footer.privacyPolicy" />
          </Link>
          <Link data-cy="footer-legal-notice" to="/legal-notice">
            <FormattedMessage id="footer.legalNotice" />
          </Link>
        </div>
      </div>
      <div className="flex w-80 mt-4 md:mt-0">
        <NewsletterSubscription
          minimal
          dataCy="footer-newsletter-subscription"
        />
      </div>
    </div>
    <div className="w-full flex flex-col md:flex-row justify-between items-center mt-10">
      <div className="flex items-center">
        <FaRegCopyright className="mr-2" />
        <span>{new Date().getFullYear()} Michael Hoffmann</span>
      </div>
      <SocialLinks
        className="flex flex-wrap justify-center mt-4 md:mt-0"
        dataCy="footer-social-links"
      />
    </div>
  </footer>
);

export default Footer;
