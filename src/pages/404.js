import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

import Bodytext from '@react-website-themes/default/components/Bodytext';
import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PageArticle from '../components/PageArticle';

import '../styles/global';
import '../styles/variables';

const bodyStyle = css`
  img {
    width: 100%;
  }
`;

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
    },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <Menu />
      </Header>
      <PageArticle narrow>
        <Heading title="404" />
        <Bodytext customStyle={bodyStyle} html={notFoundHTML} />
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

export default NotFoundPage;

export const query = graphql`
  query {
    notFound: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/notFound/" }
    ) {
      html
    }
  }
`;
