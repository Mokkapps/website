import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from 'content/meta/config';

import Article from 'components/Article';
import Layout from 'components/Layout';
import Heading from 'components/Heading';
import BodyText from 'components/BodyText';

const NotFoundPage = props => {
  const {
    data: { notFound },
  } = props;

  const { siteTitlePostfix, siteUrl } = config;

  const seoImageUrl =
    'https://res.cloudinary.com/mokkapps/image/upload/v1640673374/open_graph_home.jpg';

  return (
    <Layout
      seo={{
        url: siteUrl,
        title: `Not Found${siteTitlePostfix}`,
        description: 'The requested page was not found',
        image: seoImageUrl,
      }}
    >
      <Article>
        <Heading title="404" />
        <BodyText smallerImg body={notFound.body} />
      </Article>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotFoundPage;

export const query = graphql`
  query {
    notFound: mdx(fileAbsolutePath: { regex: "/content/parts/notFound/" }) {
      body
    }
  }
`;
