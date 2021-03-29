import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Seo from '../components/Seo';
import SimpleBlogPostList from '../components/SimpleBlogPostList';

import './style.scss';
import Heading from '../components/Heading';

const SimpleBlogPage = props => {
  const {
    data: {
      posts: { edges },
    },
  } = props;

  const posts = edges.map(edge => edge.node);

  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout>
      <Article>
        <Heading title="MINIMAL BLOG LIST" />
        <div className="my-4" />
        <SimpleBlogPostList items={posts} />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Blog${siteTitlePostfix}`}
        description="Blog posts about software engineering and career"
      />
    </Layout>
  );
};

SimpleBlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default SimpleBlogPage;

export const query = graphql`{
  allEdges: allMdx {
    edges {
      node {
        frontmatter {
          categories
        }
      }
    }
  }
  allBlogPosts: allMdx(
    filter: {fields: {source: {eq: "posts"}, slug: {ne: null}}}
  ) {
    totalCount
  }
  posts: allMdx(
    filter: {fields: {source: {eq: "posts"}, slug: {ne: null}}}
    sort: {fields: [fields___prefix], order: DESC}
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
              gatsbyImageData(width: 700, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`;
