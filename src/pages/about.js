import React from 'react';
import { graphql } from 'gatsby';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import About from '../components/About';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Header from '../components/Header';
import Seo from '../components/Seo';

const AboutPage = props => {
  const {
    data: { file },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <Menu />
      </Header>
      <Article>
        <Heading title="ABOUT ME" />
        <About aboutImage={file} />
      </Article>
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
        fixed(width: 230, height: 230) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
