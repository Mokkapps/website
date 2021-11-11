import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CalendarIcon from 'react-feather/dist/icons/calendar';

import config from '../../src/content/meta/config';

import Layout from '../components/Layout';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';
import LanguageWarning from '../components/LanguageWarning';
import ArticleWithSidebar from '../components/ArticleWithSidebar';
import { FormattedDate, FormattedMessage } from 'react-intl';
import Share from '../components/Share';
import EditOnGithub from '../components/EditOnGithub';
import Author from '../components/Author';
import ReactDisqusComments from 'react-disqus-comments';
import Button from '../components/Button';
import { getSrc } from 'gatsby-plugin-image';

const TipTemplate = props => {
  const {
    data: {
      tip: {
        body,
        frontmatter: { title, description, date, cover },
        fields: { slug },
      },
    },
  } = props;

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
      <ArticleWithSidebar>
        <LanguageWarning className="my-4" type="Tips" />
        <Heading title={title} />
        <div className="flex justify-center items-center">
          {<CalendarIcon className="mr-2 w-4 h-4" />}{' '}
          <FormattedDate value={date} />
        </div>
        <BodyText body={body} />
        <Share className="my-4" shareProps={shareProps} />
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
    }
  }
`;
