import React from 'react';
import { getSrc } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { graphql, Link } from 'gatsby';

import config from '../content/meta/config';

import Layout from '../components/Layout';
import Heading from '../components/Heading';
import TipsList from '../components/TipsList';
import LanguageWarning from '../components/LanguageWarning';

const TipsPage = props => {
  const {
    data: {
      tips: { edges },
      seoImage,
    },
  } = props;
  const allTips = edges.map(edge => edge.node);
  const { siteUrl, siteTitlePostfix } = config;

  const searchComponent = (
    <p className="mb-8">
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
        title: `Tips${siteTitlePostfix}`,
        description:
          'A collection of short tips about topics like frontend, Vue.js, JavaScript, TypeScript, HTML, CSS and more.',
        image: `${config.siteUrl}${getSrc(seoImage)}`,
      }}
    >
      <article className="px-8 md:px-24 py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center md:px-24">
            <Heading i18nId="tipsPage.title" />
            <LanguageWarning className="w-full mb-4" type="Tips" />
            <p className="text-center my-8">
              <FormattedMessage
                id="tipsPage.intro"
                values={{
                  newsletter: (
                    <Link to="/newsletter">
                      <FormattedMessage id="newsletterPage.joinTheNewsletter2" />
                    </Link>
                  ),
                }}
              />
            </p>
            {searchComponent}
            <TipsList items={allTips} author={config.authorName} />
          </div>
        </div>
      </article>
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
    seoImage: file(relativePath: { eq: "og/og-tips.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
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
            cover {
              childImageSharp {
                gatsbyImageData(
                  height: 700
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;
