import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

import '../utils/style-utils';

const IndexPage = props => {
  const {
    data: { projectAssets, latestPost },
  } = props;

  const post = latestPost.edges.map(edge => edge.node)[0];

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Hero projectAssets={projectAssets} latestPost={post} />
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

export const query = graphql`
  query {
    projectAssets: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    latestPost: allMarkdownRemark(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
            cover {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
