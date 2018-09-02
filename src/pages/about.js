import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import About from '../components/About';
import PageArticle from '../components/PageArticle';
import Layout from '../components/Layout';

import '../styles/global';
import '../styles/variables';

const headingStyle = css`
  display: flex;
  justify-content: center;
`;

const AboutPage = props => {
  const {
    data: { file },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  console.log('about props', props);

  return (
    <Layout>
      <Header>
        <Menu />
      </Header>
      <PageArticle>
        <Heading customStyle={headingStyle} title="ABOUT ME" />
        <About aboutImage={file} />
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

export default AboutPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
