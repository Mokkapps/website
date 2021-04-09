import { graphql } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

import config from '../content/meta/config';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';
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
    },
    pageContext: { next, prev },
  } = props;

  const { siteUrl, siteTitlePostfix } = config;

  const url = `${siteUrl}/blog${slug}`;
  const shareProps = {
    url,
    text: title,
    longtext: excerpt,
  };

  const allCategories = getAllCategories(allEdges);
  const handleNewComment = () => {};

  let seoImage = null;
  if (imageShare) {
    seoImage = `${config.siteUrl}${getSrc(imageShare)}`;
  } else if (cover) {
    seoImage = `${config.siteUrl}${getSrc(cover)}`;
  }

  console.log('seoImage', seoImage)


  return (
    <Layout>
      <ArticleWithSidebar categories={allCategories}>
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
            <GatsbyImage
              image={cover.childImageSharp.gatsbyImageData}
              className="mb-4 w-full h-full"
            />
          </div>
        ) : null}
        {bannerCredit ? (
          <div dangerouslySetInnerHTML={{ __html: bannerCredit }} />
        ) : null}
        <BodyText body={body} fullWidth />
        <Share className="my-4" shareProps={shareProps} />
        <Author className="mb-8" />
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
            gatsbyImageData(
              width: 500
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
        categories
        cover {
          childImageSharp {
            gatsbyImageData(
              height: 700
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      timeToRead
    }
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 60
          height: 60
          layout: FIXED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
