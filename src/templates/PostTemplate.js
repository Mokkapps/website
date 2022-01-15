import { graphql } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { FormattedMessage } from 'react-intl';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import config from 'content/meta/config';
import { isDevelopmentEnv } from 'utils';
import useArticleView from 'hooks/useArticleViews';

import ArticleWithSidebar from 'components/ArticleWithSidebar';
import Layout from 'components/Layout';
import PostMeta from 'components/PostMeta';
import BodyText from 'components/BodyText';
import NextPrev from 'components/NextPrev';
import Share from 'components/Share';
import Button from 'components/Button';
import EditOnGithub from 'components/EditOnGithub';
import LanguageWarning from 'components/LanguageWarning';
import SimilarArticles from 'components/SimilarArticles';

const nextPrevIcons = {
  next: FaAngleDoubleRight,
  prev: FaAngleDoubleLeft,
};

const PostTemplate = props => {
  const {
    data: {
      post: {
        headings,
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

  const apiSlug = isDevelopmentEnv() ? '/test' : slug;
  const { pageViews } = useArticleView(apiSlug);
  const [showComments, setShowComments] = useState(false);
  const { siteUrl, siteTitlePostfix } = config;

  const url = `${siteUrl}/blog${slug}`;
  const shareProps = {
    url,
    text: title,
    longtext: excerpt,
  };

  const handleNewComment = () => {};

  const seoImage = `${config.siteUrl}${getSrc(cover)}`;

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
      <ArticleWithSidebar slug={slug} shareProps={shareProps} headings={headings}>
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
          <div className="flex justify-center mb-4">
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
        <Share className="mt-10" shareProps={shareProps} />
        <NextPrev
          path={'/blog'}
          next={next}
          prev={prev}
          icons={nextPrevIcons}
          className="mt-10"
        />
        <EditOnGithub className="mt-10" prefix={prefix} slug={slug} />
        {showComments ? (
          <ReactDisqusComments
            shortname="mokkapps"
            identifier={slug}
            title={title}
            url={url}
            onNewComment={handleNewComment}
            className="mt-10"
          />
        ) : (
          <Button className="mt-10" block onClick={() => setShowComments(true)}>
            <FormattedMessage id="blogPage.leaveAComment" />
          </Button>
        )}

        <SimilarArticles
          className="mt-10"
          categories={categories}
          slug={slug}
        />
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
      headings {
        value
        depth
      }
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
