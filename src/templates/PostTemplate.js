import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { ShareButtonRectangle } from 'react-custom-share';
import { Margin } from 'styled-components-spacing';

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

import Footer from '../components/Footer';
import Article from '../components/Article';
import Layout from '../components/Layout';
import PostMeta from '../components/PostMeta';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';
import Seo from '../components/Seo';
import Author from '../components/Author';
import NextPrev from '../components/NextPrev';
import Share from '../components/Share';

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
  read: ReadIcon,
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
      file,
      authorImage,
    },
    pageContext: { next, prev },
  } = props;

  const { siteUrl, siteTitlePostfix } = config;

  const url = `${siteUrl}/blog${slug}`;
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

  const handleNewComment = () => {};

  return (
    <Layout>
      <Article>
        <Heading title={title} />
        <PostMeta
          authorImage={file}
          author={config.authorName}
          prefix={prefix}
          categories={categories}
          icons={metaIcons}
          timeToRead={timeToRead}
        />
        {cover ? (
          <Margin bottom={4}>
            <Img fluid={cover.childImageSharp.fluid} />
          </Margin>
        ) : null}
        <BodyText html={postHTML} />
        <Margin top={4} bottom={4}>
          <Share shareBlockProps={shareBlockProps} />
        </Margin>
        <Margin bottom={4}>
          <Author image={authorImage} />
        </Margin>
        <NextPrev next={next} prev={prev} icons={nextPrevIcons} />
        <Margin top={4}>
          <ReactDisqusComments
            shortname="mokkapps"
            identifier={slug}
            title={title}
            url={url}
            onNewComment={handleNewComment}
          />
        </Margin>
      </Article>
      <Footer />
      <Seo
        url={`${siteUrl}${slug}`}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
        image={
          cover ? `${config.siteUrl}${cover.childImageSharp.fluid.src}` : null
        }
        postSEO
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
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    authorImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
