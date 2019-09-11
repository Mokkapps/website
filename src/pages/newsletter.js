import React from 'react';
import styled from 'styled-components';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const NewsletterPage = () => {
  const { siteUrl, siteDescription } = config;
  return (
    <Layout>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Contact | ${siteDescription}`}
        description={siteDescription}
      />
    </Layout>
  );
};

export default NewsletterPage;
