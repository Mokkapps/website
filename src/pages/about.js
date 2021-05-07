import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { getSrc } from 'gatsby-plugin-image';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import About from '../components/About';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';

const AboutPage = props => {
  const {
    data: { seoImage },
  } = props;
  const { siteTitlePostfix, siteUrl, siteDescription } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="aboutPage.title" />
        <About />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`About${siteTitlePostfix}`}
        description={siteDescription}
        image={`${config.siteUrl}${getSrc(seoImage)}`}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-home.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
