import React from 'react';
import { FormattedMessage } from 'react-intl';

import config from '@content/meta/config';
import { baseFormattedMessageValues, generateSeoImageUrl } from '@utils';

import Article from '@components/Article';
import Layout from '@components/Layout';
import Heading from '@components/Heading';
import NewsletterSubscription from '@components/NewsletterSubscription';
import LinkButton from '@components/LinkButton';

const NewsletterPage = () => {
  const { siteTitlePostfix, siteUrl } = config;

  const seoImageUrl = generateSeoImageUrl('Newsletter');

  return (
    <Layout
      seo={{
        url: `${siteUrl}/newsletter`,
        title: `Newsletter${siteTitlePostfix}`,
        description:
          'Subscribe for the newsletter to stay up-do-date on Mokkapps topics',
        image: seoImageUrl,
      }}
    >
      <Article>
        <Heading i18nId="newsletterPage.newsletter" />
        <p className="w-100 text-center mb-4">
          <FormattedMessage
            id="newsletterPage.newsletterInfoLine1"
            values={{ ...baseFormattedMessageValues }}
          />
        </p>
        <p className="w-100 text-center mb-4">
          <FormattedMessage
            id="newsletterPage.newsletterInfoLine2"
            values={{ ...baseFormattedMessageValues }}
          />
        </p>
        <p className="w-100 text-center mb-4">
          <FormattedMessage
            id="newsletterPage.newsletterInfoLine3"
            values={{ ...baseFormattedMessageValues }}
          />
        </p>
        <p className="w-100 text-center mb-4">
          <FormattedMessage
            id="newsletterPage.newsletterInfoLine4"
            values={{ ...baseFormattedMessageValues }}
          />
        </p>
        <NewsletterSubscription
          h2Heading
          className="my-8"
          dataCy="newsletter-subscription-form"
        />
        <h2 className="mt-16 mb-4 text-center">
          <FormattedMessage id="newsletterPage.archiv" />
        </h2>
        <LinkButton
          newTab
          dataCy="newsletter-archive-link-button"
          href="http://newsletter.mokkapps.de/#archive"
          i18nId="newsletterPage.visitArchive"
        />
      </Article>
    </Layout>
  );
};

NewsletterPage.propTypes = {};

export default NewsletterPage;
