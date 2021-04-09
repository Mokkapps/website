import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Article from '../components/Article';
import BlogPostList from '../components/BlogPostList';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import GoogleSearchLink from '../components/GoogleSearchLink';
import CategorySelection from '../components/CategorySelection';

import { metaIcons, getAllCategories } from '../utils/helper';

import './style.scss';
import { getSrc } from 'gatsby-plugin-image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogPage = props => {
  const {
    data: {
      seoImage,
      posts: { edges },
      allEdges,
    },
  } = props;

  const posts = edges.map(edge => edge.node);
  const categories = getAllCategories(allEdges);

  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout>
      <Article>
        <Container>
          <Heading className="mb-8" title="BLOG" />
          <CategorySelection
            className="mt-4"
            categories={categories}
            centered
          />
          <GoogleSearchLink className="my-8" />
          <BlogPostList
            items={posts}
            author={config.authorName}
            metaIcons={metaIcons}
          />
        </Container>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Blog${siteTitlePostfix}`}
        image={getSrc(seoImage)}
        description="Blog posts about software engineering and career"
      />
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-blog.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
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
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
    ) {
      totalCount
    }
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
