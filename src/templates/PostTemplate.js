import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { ShareButtonRectangle } from 'react-custom-share';

import config from '../content/meta/config';

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
import ArticleWithSidebar from '../components/ArticleWithSidebar';
import Layout from '../components/Layout';
import PostMeta from '../components/PostMeta';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';
import Seo from '../components/Seo';
import Author from '../components/Author';
import NextPrev from '../components/NextPrev';
import Share from '../components/Share';

import { getAllCategories } from '../utils/helper';

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
      allEdges,
      post: {
        excerpt,
        body,
        frontmatter: {
          title,
          categories,
          cover,
          bannerCredit,
          canonical,
          imageShare,
        },
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

  const allCategories = getAllCategories(allEdges);
  const handleNewComment = () => {};

  let seoImage = null;
  if (imageShare) {
    seoImage = `${config.siteUrl}${imageShare.childImageSharp.fluid.src}`;
  } else if (cover) {
    seoImage = `${config.siteUrl}${cover.childImageSharp.fluid.src}`;
  }

  return (
    <Layout>
      <ArticleWithSidebar authorImage={authorImage} categories={allCategories}>
        <Heading title={title} />
        <PostMeta
          className="my-8"
          authorImage={file}
          author={config.authorName}
          prefix={prefix}
          categories={categories}
          icons={metaIcons}
          timeToRead={timeToRead}
        />
        {cover ? (
          <div className="flex justify-center">
            <Img className="mb-4 w-full h-full" fluid={cover.childImageSharp.fluid} />
          </div>
        ) : null}
        {bannerCredit ? (
          <div dangerouslySetInnerHTML={{ __html: bannerCredit }} />
        ) : null}
        <BodyText body={body} fullWidth />
        <Share className="my-4" shareBlockProps={shareBlockProps} />
        <Author className="mb-8" image={authorImage} />
        <NextPrev next={next} prev={prev} icons={nextPrevIcons} />
        <ReactDisqusComments
          className="mt-4"
          shortname="mokkapps"
          identifier={slug}
          title={title}
          url={url}
          onNewComment={handleNewComment}
        />
      </ArticleWithSidebar>
      <Footer />
      <Seo
        url={`${siteUrl}${slug}`}
        title={`${title}${siteTitlePostfix}`}
        canonical={canonical}
        description={excerpt}
        image={seoImage}
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
    allEdges: allMdx {
      edges {
        node {
          frontmatter {
            categories
          }
        }
      }
    }
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      fileAbsolutePath
      excerpt
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        canonical
        bannerCredit
        imageShare {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        categories
        cover {
          childImageSharp {
            fluid(maxHeight: 700) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
      timeToRead
    }
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    authorImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
