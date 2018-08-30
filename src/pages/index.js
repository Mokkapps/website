import React from 'react';
import { graphql } from 'gatsby';

import Header from '@react-website-themes/default/components/Header';
import Hero from '@react-website-themes/default/components/Hero';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CustomMenu from '../components/CustomMenu';
import CustomFooter from '../components/CustomFooter';
import HeaderLogo from '../components/HeaderLogo';

import '../styles/global';
import '../styles/variables';

import { css } from 'emotion';

const heroStyle = css`
  border-radius: 10px;
  padding: 2rem;
  background: #333333;
  a {
    align-items: center;
    background: white;
    border-radius: 3px;
    color: #fff;
    display: flex;
    font-size: 1em;
    height: 100% !important;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 2em;
    margin: 30px 0;
    animation: 0 !important;
  }

  a:hover {
    background: #FC1A20;
    transform: translate(0, -2px);
    box-shadow: 5px 5px 1px black;
  }
`;

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      hero: { html: heroHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  console.log('props', props);

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <CustomMenu items={menuItems} />
      </Header>
      <Hero customStyle={heroStyle} html={heroHTML} />
      <CustomFooter
        links={footerLinksHTML}
        copyright={copyrightHTML}
      />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
