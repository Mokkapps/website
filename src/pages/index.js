import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

import '../utils/style-utils';
import Article from '../components/Article';

const IndexPage = props => {
  const {
    data: { projectAssets, latestPosts, file },
  } = props;

  const posts = latestPosts.edges.map(edge => edge.node);

  const { siteTitlePostfix, siteUrl, siteDescription } = config;

  return (
    <Layout>
      <Article>
        <Hero
          projectAssets={projectAssets}
          latestPosts={posts}
          sliderImage={file}
        />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Home${siteTitlePostfix}`}
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
        fluid(maxWidth: 1900, maxHeight: 700) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    projectAssets: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
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
