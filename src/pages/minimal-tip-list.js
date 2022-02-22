import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from 'content/meta/config';
import { generateSeoImageUrl } from 'utils';

import Layout from 'components/Layout';
import Article from 'components/Article';
import Heading from 'components/Heading';
import SimpleTipList from 'components/SimpleTipList';

const SimpleBlogPage = props => {
  const {
    data: {
      tips: { edges },
    },
  } = props;

  const seoImageUrl = generateSeoImageUrl('Minimal Tip List');

  const tips = edges.map(edge => edge.node);

  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout
      seo={{
        url: `${siteUrl}/minimal-tip-list`,
        title: `Minimal Tip List${siteTitlePostfix}`,
        description:
          'A collection of Vue.js tips to become a Vue expert.',
        image: seoImageUrl,
      }}
    >
      <Article>
        <Heading i18nId="minimalTipListPage.title" />
        <SimpleTipList items={tips} />
      </Article>
    </Layout>
  );
};

SimpleBlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default SimpleBlogPage;

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
          }
          frontmatter {
            title
            date
            cover {
              childImageSharp {
                gatsbyImageData(
                  width: 700
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
