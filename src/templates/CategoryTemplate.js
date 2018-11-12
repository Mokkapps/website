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

import { metaIcons, getAllCategories } from '../utils/helper';

const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredHeading = styled.h3`
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

  const { siteUrl, siteDescription, siteLanguage, siteTitlePostfix } = config;

  return (
    <Layout>
      <Article>
        <Heading>
          <Introduction data-cy="category-introduction">
            <Margin right={2}>
              <span>Posts in category</span>
            </Margin>{' '}
            <TagIcon />
          </Introduction>
          <h1>{category}</h1>
          <h3>
            There {totalCount > 1 ? 'are' : 'is'} <strong>{totalCount}</strong>{' '}
            post
            {totalCount > 1 ? 's' : ''} in this category:
          </h3>
        </Heading>
        <BlogPostList
          items={items}
          author={config.authorName}
          metaIcons={metaIcons}
        />
        <Margin top={2} bottom={2}>
          <CenteredHeading>Other Categories</CenteredHeading>
          <CategorySelection categories={categories} />
        </Margin>
      </Article>
      <Footer />
      <Seo
        url={`${siteUrl}/categories/${category}/`}
        language={siteLanguage}
        title={`Posts in category: ${category}${siteTitlePostfix}`}
        description={siteDescription}
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
