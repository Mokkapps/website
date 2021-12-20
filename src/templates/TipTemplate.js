import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import ReactDisqusComments from 'react-disqus-comments';

import config from '@content/meta/config';

import Layout from '@components/Layout';
import BodyText from '@components/BodyText';
import LanguageWarning from '@components/LanguageWarning';
import ArticleWithSidebar from '@components/ArticleWithSidebar';
import Share from '@components/Share';
import EditOnGithub from '@components/EditOnGithub';
import Button from '@components/Button';
import PostMeta from '@components/PostMeta';

const TipTemplate = props => {
  const {
    data: {
      tip: {
        body,
        frontmatter: { title, description, date, cover },
        fields: { slug },
        timeToRead,
      },
    },
  } = props;

  const [showComments, setShowComments] = useState(false);
  const [pageViews, setPageViews] = useState(null);
  const handleNewComment = () => {};

  const { siteUrl, siteTitlePostfix } = config;

  const seoImage = `${config.siteUrl}${getSrc(cover)}`;
  const url = `${siteUrl}/tips${slug}`;
  const shareProps = {
    url,
    text: title,
    longtext: description,
  };

  useEffect(() => {
    const apiSlug = slug.split('/')[2];
    fetch(`/api/views/${apiSlug}`, { method: 'POST' })
      .then(() => {
        fetch(`/api/views/${apiSlug}`)
          .then(response =>
            response.json().then(json => {
              setPageViews(json.total);
            })
          )
          .catch(error =>
            console.log(`Failed to get page views for slug ${apiSlug}`, error)
          );
      })
      .catch(error =>
        console.log(`Failed to set page views for slug ${apiSlug}`, error)
      );
  }, [slug]);

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
      <ArticleWithSidebar shareProps={shareProps}>
        <LanguageWarning className="my-4" type="Tips" />
        <h1>{title}</h1>
        <PostMeta className="my-10" date={date} timeToRead={timeToRead} pageViews={pageViews} />
        {cover ? (
          <div className="flex justify-center mt-10">
            <GatsbyImage
              alt={`${title} Image`}
              image={cover.childImageSharp.gatsbyImageData}
              className="mb-4 w-full h-full"
            />
          </div>
        ) : null}
        <BodyText body={body} fullWidth />
        <Share className="my-10" shareProps={shareProps} />
        <EditOnGithub isTip slug={slug} />
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
