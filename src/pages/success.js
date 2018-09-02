import React from 'react';
import { graphql } from 'gatsby';

import Bodytext from '@react-website-themes/default/components/Bodytext';
import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PageArticle from '../components/PageArticle';
import Layout from '../components/Layout';

import '../styles/global';
import '../styles/variables';

const SuccessPage = props => {
  const {
    data: {
      success: { html: contactSuccessHTML },
    },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <Menu/>
      </Header>
      <PageArticle>
        <Heading title="SUCCESS" />
        <Bodytext html={contactSuccessHTML} />
      </PageArticle>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
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
