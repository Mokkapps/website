import React from 'react';
import PropType from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby';

import config from 'content/meta/config';
import {
  baseFormattedMessageValues,
  generateSeoImageUrl,
  generateCloudinaryImageUrl,
} from 'utils';

import Article from 'components/Article';
import Layout from 'components/Layout';
import Heading from 'components/Heading';
import NewsletterSubscription from 'components/NewsletterSubscription';
import LinkCard from 'components/LinkCard';

const NewsletterPage = ({ data: { allRevueIssue } }) => {
  const issues = allRevueIssue.nodes;
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

        <div
          className={`w-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6`}
          data-cy="newsletter-issues-list"
        >
          {issues
            .filter(({ active }) => !active)
            .map(({ title, url, sent_at }, index) => {
              const coverUrl = generateCloudinaryImageUrl({
                title,
                cloudName: 'mokkapps',
                imagePublicID: 'revue_newsletter_template.jpg',
                textLeftOffset: 300,
              });

              return (
                <LinkCard
                  key={url}
                  to={url}
                  title={title}
                  coverUrl={coverUrl}
                  date={sent_at}
                  dataCy={`newsletter-issue-${index}`}
                />
              );
            })}
        </div>
      </Article>
    </Layout>
  );
};

NewsletterPage.propTypes = {
  data: PropType.object,
};

export default NewsletterPage;

export const pageQuery = graphql`
  query RevueIssues {
    allRevueIssue {
      nodes {
        title
        html
        sent_at
        description
        url
        active
      }
    }
  }
`;
