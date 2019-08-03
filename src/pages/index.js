import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

import '../utils/style-utils';

const IndexPage = props => {
  const {
    data: { projectAssets, latestPosts, file },
  } = props;

  const posts = latestPosts.edges.map(edge => edge.node);

  const { siteUrl, siteTitle, siteDescription } = config;

  return (
    <Layout>
      <Hero projectAssets={projectAssets} latestPosts={posts} sliderImage={file} />
      <Footer />
      <Seo
        url={siteUrl}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "slider.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
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
    latestPosts: allMarkdownRemark(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
      limit: 3
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
                fluid(maxWidth: 1500) {
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
