import React from 'react';
import { graphql } from 'gatsby';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Seo from '../components/Seo';

import '../utils/style-utils';

const IndexPage = props => {
  const {
    data: { projectAssets },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <Menu />
      </Header>
      <Hero projectAssets={projectAssets} />
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

export default IndexPage;

export const query = graphql`
  query {
    projectAssets: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
