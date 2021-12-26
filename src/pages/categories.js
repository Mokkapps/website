import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '@content/meta/config';
import { getAllCategories, generateSeoImageUrl } from '@utils';

import Layout from '@components/Layout';
import Article from '@components/Article';
import Heading from '@components/Heading';
import CategorySelection from '@components/CategorySelection';

const CategoriesPage = props => {
  const {
    data: { allEdges },
  } = props;

  const seoImageUrl = generateSeoImageUrl('Categories');

  const categories = getAllCategories(allEdges);
  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout
      seo={{
        url: `${siteUrl}/categories`,
        title: `Categories${siteTitlePostfix}`,
        description: 'Available categories for blog posts',
        image: seoImageUrl,
      }}
    >
      <Article>
        <Heading i18nId="categoriesPage.title" />
        <CategorySelection
          className="my-4"
          categories={categories}
          centered
          dataCy="blog-categories"
        />
      </Article>
    </Layout>
  );
};

CategoriesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default CategoriesPage;

export const query = graphql`
  {
    allEdges: allMdx {
      edges {
        node {
          frontmatter {
            categories
          }
        }
      }
    }
  }
`;
