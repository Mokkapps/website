import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'emotion';

import 'prismjs/themes/prism-okaidia.css';

import { ShareButtonRectangle } from 'react-custom-share';

import Author from '@react-website-themes/default/components/Author';
import Bodytext from '@react-website-themes/default/components/Bodytext';
import Header from '@react-website-themes/default/components/Header';
import NextPrev from '@react-website-themes/default/components/NextPrev';
import Seo from '@react-website-themes/default/components/Seo';
import Share from '@react-website-themes/default/components/Share';

import config from 'content/meta/config';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import EmailIcon from 'react-feather/dist/icons/mail';
import ReadIcon from 'react-feather/dist/icons/eye';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PostArticle from '../components/PostArticle';
import Layout from '../components/Layout';
import PostMeta from '../components/PostMeta';
import Heading from '../components/Heading';

import '../styles/global';
import '../styles/variables';

const bodyTextStyle = css`
  img {
    width: 100%;
  }

  ol {
    margin: 0 0 1.5em;
    list-style-position: inside;
  }
`;

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
  read: ReadIcon
};

const nextPrevIcons = {
  next: NextIcon,
  prev: PrevIcon,
};

const PostTemplate = props => {
  const {
    data: {
      post: {
        excerpt,
        html: postHTML,
        frontmatter: { title, categories, cover },
        fields: { slug, prefix },
        timeToRead,
      },
      author: { html: authorHTML },
      file
    },
    pageContext: { next, prev }
  } = props;

  const { siteUrl, siteLanguage, siteTitlePostfix } = config;

  const url = siteUrl + slug;
  const shareBlockProps = {
    url,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: TwitterIcon },
      { network: 'Facebook', icon: FacebookIcon },
      { network: 'Email', icon: EmailIcon },
    ],
    text: title,
    longtext: excerpt,
  };

  return (
    <Layout>
      <Header>
        <Menu />
      </Header>
      <PostArticle>
        <Heading title={title} />
        <PostMeta
          authorImage={file}
          author="Michael Hoffmann"
          prefix={prefix}
          categories={categories}
          icons={metaIcons}
          timeToRead={timeToRead}
        />
        {cover ? (
          <Img
            style={{ marginBottom: '1rem' }}
            fluid={cover.childImageSharp.fluid}
          />
        ) : null}
        <Bodytext customStyle={bodyTextStyle} html={postHTML} />
        <Share shareBlockProps={shareBlockProps} />
        <NextPrev next={next} prev={prev} icons={nextPrevIcons} />
        <Author html={authorHTML} />
      </PostArticle>
      <Footer />
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
      />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      excerpt
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        categories
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
    author: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/author/" }
    ) {
      html
    }
    file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
