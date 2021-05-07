import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import BlogPostList from '../components/BlogPostList';
import CategorySelection from '../components/CategorySelection';
import { getCategoryDisplayText, metaIcons } from '../utils/helper';

const PageTemplate = props => {
  const {
    pageContext: { category },
    data: {
      posts: { totalCount, edges },
      allCategories,
    },
  } = props;

  const items = edges.map(edge => edge.node);
  const categories = allCategories.group.map(c => c.fieldValue);

  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout>
      <Article>
        <Heading>
          <span
            className="flex items-center justify-center"
            data-cy="category-introduction"
          >
            <FormattedMessage id="categoriesPage.postsInCategory" />
          </span>
          <h1 className="mt-3">{getCategoryDisplayText(category)}</h1>
          <h3 className="my-8">
            <FormattedMessage
              id={
                totalCount <= 1
                  ? 'categoriesPage.singlePostInCategory'
                  : 'categoriesPage.multiplePostsInCategory'
              }
              values={{ count: totalCount }}
            />
          </h3>
        </Heading>
        <BlogPostList
          items={items}
          author={config.authorName}
          metaIcons={metaIcons}
        />
        <h4 className="text-center">
          <FormattedMessage id="categoriesPage.otherCategories" />
        </h4>
        <CategorySelection
          className="my-4"
          categories={categories}
          centered
          dataCy="blog-categories"
        />
      </Article>
      <Footer />
      <Seo
        url={`${siteUrl}/categories/${category}/`}
        title={`Posts in category: ${getCategoryDisplayText(category)}${siteTitlePostfix}`}
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
    allCategories: allMdx(filter: { frontmatter: { categories: { ne: "" } } }) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
    posts: allMdx(
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
