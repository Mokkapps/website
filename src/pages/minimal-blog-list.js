import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Layout from '../components/Layout';
import Article from '../components/Article';
import SimpleBlogPostList from '../components/SimpleBlogPostList';

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
    <Layout
      seo={{
        url: `${siteUrl}/minimal-blog-list`,
        title: `Minimal Blog List${siteTitlePostfix}`,
        description: 'Blog posts about software engineering and career',
      }}
    >
      <Article>
        <Heading i18nId="minimalBlogListPage.title" />
        <SimpleBlogPostList items={posts} />
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
    posts: allMdx(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
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
