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
        <p className="text-center text-3xl">
          <FormattedMessage
            id="newsletterPage.newsletterInfoLine1"
            values={{ ...baseFormattedMessageValues }}
          />
        </p>
        <p className="text-center text-secondary-text text-lg mt-4">
          <FormattedMessage
            id="newsletterPage.newsletterInfoLine2"
            values={{ ...baseFormattedMessageValues }}
          />
        </p>
        <NewsletterSubscription
          grid
          heading={false}
          notConvinced={false}
          className="my-10"
          dataCy="newsletter-subscription-form"
        />
        <p className="text-xl">
            <FormattedMessage id="newsletterPage.alternativeLine1" />
          </p>
        <p className="text-secondary-text text-xl mt-4">
            <FormattedMessage
              id="newsletterPage.alternativeLine2"
              values={{
                twitterLink: (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.twitter.com/mokkapps"
                  >
                    Twitter
                  </a>
                ),
              }}
            />
          </p>
        <h2 className="mt-16">
          <FormattedMessage id="newsletterPage.archiv" />
        </h2>
        <div
          className={`w-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8`}
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
                  externalLink
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
    allRevueIssue (sort: {fields: sent_at, order: DESC}) {
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
