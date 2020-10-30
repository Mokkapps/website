import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import { Margin } from 'styled-components-spacing';

import TagIcon from 'react-feather/dist/icons/tag';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import BlogPostList from '../components/BlogPostList';
import CategorySelection from '../components/CategorySelection';
import GoogleSearchLink from '../components/GoogleSearchLink';

import { metaIcons, getAllCategories, capitalize } from '../utils/helper';
import { FormattedMessage } from 'react-intl';

const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredHeading = styled.h4`
  text-align: center;
`;

const PageTemplate = props => {
  const {
    pageContext: { category },
    data: {
      posts: { totalCount, edges },
      allPosts,
    },
  } = props;

  const items = edges.map(edge => edge.node);
  const categories = getAllCategories(allPosts);

  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout>
      <Article>
        <Heading>
          <Margin bottom={3}>
            <Introduction data-cy="category-introduction">
              <Margin right={2}>
                <span>
                  <FormattedMessage id="postsInCategory" />
                </span>
              </Margin>{' '}
              <TagIcon />
            </Introduction>
          </Margin>
          <h1>{capitalize(category)}</h1>
          <h3>
            <FormattedMessage
              id={
                totalCount <= 1
                  ? 'singlePostInCategory'
                  : 'multiplePostsInCategory'
              }
              values={{ count: totalCount }}
            />
          </h3>
          <Margin top={4} bottom={4}>
            <CenteredHeading>
              <FormattedMessage id="otherCategories"></FormattedMessage>
            </CenteredHeading>
            <CategorySelection categories={categories} centered />
          </Margin>
          <GoogleSearchLink />
        </Heading>
        <BlogPostList
          items={items}
          author={config.authorName}
          metaIcons={metaIcons}
        />
      </Article>
      <Footer />
      <Seo
        url={`${siteUrl}/categories/${category}/`}
        title={`Posts in category: ${category}${siteTitlePostfix}`}
        description={`This page contains all the posts in the category ${category}`}
      />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query CategoryTemplateQuery($category: String!) {
    allPosts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            categories
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            prefix
          }
          excerpt
          timeToRead
          frontmatter {
            title
            categories
            cover {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
