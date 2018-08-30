import React from 'react';
import { graphql } from 'gatsby';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CustomMenu from '../components/CustomMenu';
import CustomFooter from '../components/CustomFooter';
import HeaderLogo from '../components/HeaderLogo';
import About from '../components/About/About';
import PageArticle from '../components/PageArticle';

import '../styles/global';
import '../styles/variables';

const AboutPage = props => {
  const {
    data: {
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <CustomMenu items={menuItems} />
      </Header>
      <PageArticle>
        <Heading title="About me" />
        <About />
      </PageArticle>
      <CustomFooter copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
