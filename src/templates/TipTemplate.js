import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ReactDisqusComments from 'react-disqus-comments';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import config from 'content/meta/config';
import { generateVueTipImageUrl, isDevelopmentEnv } from 'utils';
import useArticleView from 'hooks/useArticleViews';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import BodyText from 'components/BodyText';
import LanguageWarning from 'components/LanguageWarning';
import ArticleWithSidebar from 'components/ArticleWithSidebar';
import Share from 'components/Share';
import EditOnGithub from 'components/EditOnGithub';
import Button from 'components/Button';
import PostMeta from 'components/PostMeta';
import NextPrev from '../components/NextPrev';

const TipTemplate = props => {
  const {
    data: {
      tip: {
        body,
        frontmatter: { title, description, date },
        fields: { slug },
        timeToRead,
      },
    },
    pageContext: { next, prev },
  } = props;

  const nextPrevIcons = {
    next: FaAngleDoubleRight,
    prev: FaAngleDoubleLeft,
  };

  const apiSlug = isDevelopmentEnv() ? 'test' : slug.split('/')[2];
  const { pageViews } = useArticleView(`/${apiSlug}`);

  const [showComments, setShowComments] = useState(false);
  const handleNewComment = () => {};

  const { siteUrl, siteTitlePostfix } = config;

  const coverUrl = generateVueTipImageUrl(slug);

  const seoImage = coverUrl;
  const url = `${siteUrl}/tips${slug}`;
  const shareProps = {
    url,
    text: title,
    longtext: description,
  };

  return (
    <Layout
      seo={{
        url: `${siteUrl}${slug}`,
        title: `${title}${siteTitlePostfix}`,
        description: description,
        image: seoImage,
        postSEO: true,
      }}
    >
      <ArticleWithSidebar slug={slug.split('/')[2]} shareProps={shareProps}>
        <LanguageWarning className="my-4" type="Tips" />
        <h1>{title}</h1>
        <PostMeta
          className="my-10"
          date={date}
          timeToRead={timeToRead}
          pageViews={pageViews}
        />
        {coverUrl ? (
          <div className="flex justify-center my-10">
            <LazyLoadImage
              src={coverUrl}
              alt={`${title} Image`}
              width={'100%'}
              className="rounded-md"
            />
          </div>
        ) : null}
        <BodyText body={body} fullWidth />
        <Share className="mt-10" shareProps={shareProps} />
        <NextPrev
          path={'/tips'}
          next={next}
          prev={prev}
          icons={nextPrevIcons}
          className="mt-10"
        />
        <EditOnGithub className="mt-10" isTip slug={slug} />
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
      </ArticleWithSidebar>
    </Layout>
  );
};

TipTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default TipTemplate;

export const query = graphql`
  query TipTemplateQuery($slug: String!) {
    tip: mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        description
        date
      }
      timeToRead
    }
  }
`;
