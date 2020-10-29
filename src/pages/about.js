import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import About from '../components/About';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';

const AboutPage = props => {
  const {
    data: { introImage, consultingImage },
  } = props;

  const { siteTitlePostfix, siteUrl, siteDescription } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="aboutMe" />
        <About
          images={{
            intro: introImage,
            consulting: consultingImage,
          }}
        />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`About${siteTitlePostfix}`}
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
    introImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    consultingImage: file(relativePath: { eq: "consulting2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
