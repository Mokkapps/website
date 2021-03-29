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

const AboutPage = () => {
  const { siteTitlePostfix, siteUrl, siteDescription } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="aboutMe" />
        <About />
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
