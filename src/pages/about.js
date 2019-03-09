import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import About from '../components/About';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';

const AboutPage = props => {
  const {
    data: { file },
  } = props;

  const { siteUrl, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Article>
        <Heading title="ABOUT ME" />
        <About aboutImage={file} />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={`About | ${siteDescription}`}
        description={siteDescription}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fixed(width: 230, height: 230) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
