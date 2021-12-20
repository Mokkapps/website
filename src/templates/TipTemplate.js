import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import ReactDisqusComments from 'react-disqus-comments';
import { FaRegCalendar, FaRegClock } from "react-icons/fa";

import config from '@content/meta/config';

import Layout from '@components/Layout';
import BodyText from '@components/BodyText';
import LanguageWarning from '@components/LanguageWarning';
import ArticleWithSidebar from '@components/ArticleWithSidebar';
import Share from '@components/Share';
import EditOnGithub from '@components/EditOnGithub';
import Author from '@components/Author';
import Button from '@components/Button';
import PostMeta from '@components/PostMeta';

const TipTemplate = props => {
  const {
    data: {
      tip: {
        body,
        frontmatter: { title, description, date, cover },
        fields: { slug },
        timeToRead
      },
    },
  } = props;

  const metaIcons = {
    calendar: FaRegCalendar,
    read: FaRegClock,
  };

  const [showComments, setShowComments] = useState(false);
  const handleNewComment = () => {};

  const { siteUrl, siteTitlePostfix } = config;

  const seoImage = `${config.siteUrl}${getSrc(cover)}`;
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
      <ArticleWithSidebar shareProps={shareProps}>
        <LanguageWarning className="my-4" type="Tips" />
        <h1>{title}</h1>
        <PostMeta
          className="my-10"
          date={date}
          icons={metaIcons}
          timeToRead={timeToRead}
        />
        {cover ? (
          <div className="flex justify-center mt-10">
            <GatsbyImage
              alt={`${title} Image`}
              image={cover.childImageSharp.gatsbyImageData}
              className="mb-4 w-full h-full"
            />
          </div>
        ) : null}
        <BodyText body={body} fullWidth/>
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
        <Author className="xl:hidden my-8" />
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
