import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import NewsletterSubscription from '../components/NewsletterSubscription';
import LinkButton from '../components/LinkButton';
import { baseFormattedMessageValues } from '../utils/helper';

const NewsletterPage = props => {
  const {
    data: { seoImage },
  } = props;
  const { siteTitlePostfix, siteUrl } = config;

  return (
    <Layout
      seo={{
        url: `${siteUrl}/newsletter`,
        title: `Newsletter${siteTitlePostfix}`,
        description:
          'Subscribe for the newsletter to stay up-do-date on Mokkapps topics',
        image: getSrc(seoImage),
      }}
    >
      <Article>
        <Heading i18nId="newsletterPage.newsletter" className="mb-8" />
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
        <NewsletterSubscription h2Heading className="my-8" />
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

NewsletterPage.propTypes = {
  data: PropTypes.object,
};

export default NewsletterPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-newsletter.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
