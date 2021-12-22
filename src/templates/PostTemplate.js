import { graphql } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { FormattedMessage } from 'react-intl';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';

import config from '@content/meta/config';
import ArticleWithSidebar from '@components/ArticleWithSidebar';
import Layout from '@components/Layout';
import PostMeta from '@components/PostMeta';
import BodyText from '@components/BodyText';
import NextPrev from '@components/NextPrev';
import Share from '@components/Share';
import Button from '@components/Button';
import EditOnGithub from '@components/EditOnGithub';
import LanguageWarning from '@components/LanguageWarning';

const nextPrevIcons = {
  next: FaAngleDoubleRight,
  prev: FaAngleDoubleLeft,
};

const PostTemplate = props => {
  const {
    data: {
      post: {
        excerpt,
        body,
        frontmatter: {
          title,
          cover,
          bannerCredit,
          canonical,
          lastUpdated,
          categories,
        },
        fields: { slug, prefix },
        timeToRead,
      },
    },
    pageContext: { next, prev },
  } = props;

  const [showComments, setShowComments] = useState(false);
  const [pageViews, setPageViews] = useState(null);
  const { siteUrl, siteTitlePostfix } = config;

  const url = `${siteUrl}/blog${slug}`;
  const shareProps = {
    url,
    text: title,
    longtext: excerpt,
  };

  const handleNewComment = () => {};

  const seoImage = `${config.siteUrl}${getSrc(cover)}`;

  useEffect(() => {
    fetch(`${process.env.API_URL}views${slug}`, { method: 'POST' })
      .then(() => {
        fetch(`${process.env.API_URL}views${slug}`)
          .then(response =>
            response.json().then(json => {
              setPageViews(json.total);
            })
          )
          .catch(error =>
            console.log(`Failed to get page views for slug ${slug}`, error)
          );
      })
      .catch(error =>
        console.log(`Failed to set page views for slug ${slug}`, error)
      );
  }, [slug]);

  return (
    <Layout
      seo={{
        url: `${siteUrl}${slug}`,
        title: `${title}${siteTitlePostfix}`,
        canonical: canonical,
        description: excerpt,
        image: seoImage,
        postSEO: true,
      }}
    >
      <ArticleWithSidebar slug={slug} shareProps={shareProps}>
        <LanguageWarning className="my-4" type="Blog Artikel" />
        <h1>{title}</h1>
        <PostMeta
          className="my-10"
          date={prefix}
          lastUpdated={lastUpdated}
          timeToRead={timeToRead}
          categories={categories}
          pageViews={pageViews}
        />
        {cover ? (
          <div className="flex justify-center">
            <GatsbyImage
              alt={`${title} Image`}
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
        <NextPrev
          className="my-8"
          next={next}
          prev={prev}
          icons={nextPrevIcons}
        />
        <EditOnGithub prefix={prefix} slug={slug} />
        {showComments ? (
          <ReactDisqusComments
            shortname="mokkapps"
            identifier={slug}
            title={title}
            url={url}
            onNewComment={handleNewComment}
          />
        ) : (
          <Button className="my-8" block onClick={() => setShowComments(true)}>
            <FormattedMessage id="blogPage.leaveAComment" />
          </Button>
        )}
      </ArticleWithSidebar>
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
        categories
        lastUpdated
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
  }
`;
