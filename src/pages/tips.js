import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { graphql, Link } from 'gatsby';

import config from 'content/meta/config';
import { baseFormattedMessageValues, generateSeoImageUrl } from 'utils';

import Layout from 'components/Layout';
import Heading from 'components/Heading';
import TipsList from 'components/TipsList';
import LanguageWarning from 'components/LanguageWarning';
import Article from 'components/Article';

const TipsPage = props => {
  const {
    data: {
      tips: { edges },
    },
  } = props;
  const allTips = edges.map(edge => edge.node);
  const { siteUrl, siteTitlePostfix } = config;

  const seoImageUrl = generateSeoImageUrl('Vue Tips');

  const searchComponent = (
    <p>
      <FormattedMessage
        id="tipsPage.searchAlternative"
        values={{
          google: (
            <a href="https://www.google.com/search?q=site%3Amokkapps.de%2Ftips">
              Google
            </a>
          ),
          minimalList: (
            <Link to="/minimal-tip-list">
              <FormattedMessage id="blogPage.minimalList" />
            </Link>
          ),
        }}
      />
    </p>
  );

  return (
    <Layout
      seo={{
        url: `${siteUrl}/tips`,
        title: `Vue Tips${siteTitlePostfix}`,
        description:
          'A collection of short Vue.js tips to become a Vue expert.',
        image: seoImageUrl,
      }}
    >
      <Article>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center md:px-24">
            <Heading i18nId="tipsPage.title" />
            <LanguageWarning className="w-full mb-4" type="Tips" />
            <p className="text-center text-lg">
              <FormattedMessage
                id="tipsPage.introLine1"
                values={{
                  ...baseFormattedMessageValues,
                }}
              />
            </p>
            <p className="text-center text-lg text-secondary-text mt-4">
              <FormattedMessage
                id="tipsPage.introLine2"
                values={{
                  newsletter: (
                    <Link to="/newsletter">
                      <FormattedMessage id="newsletterPage.joinTheNewsletter2" />
                    </Link>
                  ),
                }}
              />
            </p>
            <div className="my-8">{searchComponent}</div>
            <TipsList items={allTips} author={config.authorName} />
          </div>
        </div>
      </Article>
    </Layout>
  );
};

TipsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default TipsPage;

export const query = graphql`
  {
    tips: allMdx(
      filter: { fields: { source: { eq: "tips" }, slug: { ne: null } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
            date
          }
        }
      }
    }
  }
`;
