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
import List from '../components/List';

const PageTemplate = props => {
  const {
    pageContext: { category },
    data: {
      posts: { totalCount, edges },
    },
  } = props;

  const items = edges.map(edge => edge.node);

  const { siteUrl, siteDescription, siteLanguage, siteTitlePostfix } = config;

  const Introduction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Layout>
      <Article>
        <Heading>
          <Introduction>
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
        <List items={items} />
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
          }
          excerpt
          timeToRead
          frontmatter {
            title
            categories
          }
        }
      }
    }
  }
`;
