import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import config from 'content/meta/config';
import { getAllCategories, metaIcons, generateSeoImageUrl } from 'utils';

import Layout from 'components/Layout';
import BlogPostList from 'components/BlogPostList';
import Heading from 'components/Heading';
import CategorySelection from 'components/CategorySelection';
import LanguageWarning from 'components/LanguageWarning';
import Article from 'components/Article';
import FeaturedBlogPost from '../components/FeaturedBlogPost';

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
    <p className="text-xs">
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
  let posts = hasSearchResults ? filteredData : allPosts;
  const latestPost = posts[0];
  posts = posts.length > 1 ? posts.filter(p => p.fields.slug !== latestPost.fields.slug) : posts;

  const searchInput = (
    <section className="flex relative">
      <section className="relative mb-4">
        <input
          type="text"
          aria-label="Search"
          placeholder="Search by category..."
          className="w-64 mr-4"
          onChange={handleInputChange}
          data-cy="blog-category-filter-input"
        />
        <span className="text-secondary-text absolute right-5 top-0.5">
          {posts.length}
        </span>
      </section>
    </section>
  );

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
      <Article>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
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
            <div className="w-full flex flex-col mt-8">
              <div>{searchInput}</div>
              <div>{searchComponent}</div>
            </div>
            <CategorySelection
              compact
              className="mt-4"
              categories={categories}
              dataCy={'blog-categories'}
            />
          </div>
          <FeaturedBlogPost className="mt-16" post={latestPost} />
          <BlogPostList
            className="mt-10"
            items={posts}
            author={config.authorName}
            metaIcons={metaIcons}
          />
        </div>
      </Article>
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
