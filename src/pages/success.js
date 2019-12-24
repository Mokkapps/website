import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';
import Seo from '../components/Seo';

const SuccessPage = props => {
  const {
    data: {
      success: { html: contactSuccessHTML },
    },
  } = props;

  const { siteTitlePostfix, siteUrl } = config;

  return (
    <Layout>
      <Article>
        <Heading title="SUCCESS" />
        <BodyText html={contactSuccessHTML} />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Contact Success${siteTitlePostfix}`}
        description="The contact request was sent successfully"
      />
    </Layout>
  );
};

SuccessPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SuccessPage;

export const query = graphql`
  query {
    success: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/contactSuccess/" }
    ) {
      html
    }
  }
`;
