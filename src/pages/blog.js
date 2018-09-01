import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';

import Article from '@react-website-themes/default/components/Article';
import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Blog from '@react-website-themes/default/components/Blog';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CustomMenu from '../components/CustomMenu';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';

import '../styles/global';
import '../styles/variables';

const articleStyle = css`
  border-radius: 1rem;
  background: #333333;
  margin: auto;
  padding: 2rem;
  min-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const blogStyle = css`
  padding: 2rem;
  width: 80%;
`;

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

const BlogPage = props => {
  const {
    data: {
      posts: { edges }
    },
  } = props;

  const posts = edges.map(edge => edge.node);

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <CustomMenu items={menuItems} />
      </Header>
      <Article customStyle={articleStyle}>
        <Heading title="Blog" />
        <Blog
          customStyle={blogStyle}
          items={posts}
          author={'Michael Hoffmann'}
          metaIcons={metaIcons}
        />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    posts: allMarkdownRemark(
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
          }
        }
      }
    }
  }
`;
