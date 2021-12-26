import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import config from '@content/meta/config';
import { getAllCategories, metaIcons, generateSeoImageUrl } from '@utils';

import Layout from '@components/Layout';
import BlogPostList from '@components/BlogPostList';
import Heading from '@components/Heading';
import CategorySelection from '@components/CategorySelection';
import LanguageWarning from '@components/LanguageWarning';

const BlogPage = props => {
  const {
    data: {
      allEdges,
      posts: { edges },
    },
  } = props;

  const seoImageUrl = generateSeoImageUrl('Blog');

  const categories = getAllCategories(allEdges);
  const allPosts = edges.map(edge => edge.node);
  const { siteUrl, siteTitlePostfix } = config;
  const emptyQuery = '';
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });
  const { filteredData, query } = state;

  const handleInputChange = event => {
    const searchQuery = event.target.value;

    const availablePosts = posts || [];

    const filteredPosts = availablePosts.filter(post => {
      const { categories: postCategories } = post.frontmatter;

      return (
        postCategories &&
        postCategories
          .join('')
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    });

    setState({
      query: searchQuery,
      filteredData: filteredPosts,
    });
  };

  const searchComponent = (
    <p className="text-center">
      <FormattedMessage
        id="blogPage.searchAlternative"
        values={{
          google: (
            <a href="https://www.google.com/search?q=site%3Amokkapps.de%2Fblog">
              Google
            </a>
          ),
          minimalList: (
            <Link to="/minimal-blog-list">
              <FormattedMessage id="blogPage.minimalList" />
            </Link>
          ),
        }}
      />
    </p>
  );

  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <Layout
      seo={{
        url: `${siteUrl}/blog`,
        title: `Blog${siteTitlePostfix}`,
        image: seoImageUrl,
        description:
          'Blog posts from Michael Hoffmann about Frontend, Backend, Fullstack, Vue.js, JavaScript, TypeScript and more.',
      }}
    >
      <article className="px-8 md:px-24 py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center md:px-24">
            <Heading i18nId="blogPage.title" />
            <LanguageWarning className="w-full mb-4" type="Blog Artikel" />
            <p className="text-lg">
              <FormattedMessage
                id="blogPage.introductionLine1"
                values={{
                  twitter: (
                    <a
                      href="https://twitter.com/mokkapps"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  ),
                }}
              />
            </p>
            <p className="text-xl text-secondary-text mt-4">
              <FormattedMessage
                id="blogPage.introductionLine2"
                values={{
                  newsletter: (
                    <Link to="/newsletter">
                      <FormattedMessage id="newsletterPage.joinTheNewsletter2" />
                    </Link>
                  ),
                }}
              />
            </p>
            <section className="flex relative mt-16">
              <section className="relative mb-4">
                <input
                  type="text"
                  aria-label="Search"
                  placeholder="Search by category..."
                  className="w-64 pl-2 mr-4"
                  onChange={handleInputChange}
                  data-cy="blog-category-filter-input"
                />
                <span className="absolute right-7 top-1">{posts.length}</span>
              </section>
            </section>
            <CategorySelection
              compact
              className="mt-2"
              categories={categories}
              dataCy={'blog-categories'}
            />
            <div className="mt-4">{searchComponent}</div>
          </div>
          <BlogPostList
            className="mt-10"
            items={posts}
            author={config.authorName}
            metaIcons={metaIcons}
          />
        </div>
      </article>
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
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  }
`;
