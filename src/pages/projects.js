import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CustomMenu from '../components/CustomMenu';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';
import ProjectList from '../components/ProjectList';
import PageArticle from '../components/PageArticle';

import '../styles/global';
import '../styles/variables';

const headingStyle = css`
  display: flex;
  justify-content: center;
`;

const ProjectsPage = props => {
  const {
    data: { projectAssets },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <CustomMenu items={menuItems} />
      </Header>
      <PageArticle>
        <Heading customStyle={headingStyle} title="💻 My Private Projects" />
        <ProjectList projectAssets={projectAssets} />
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

export default ProjectsPage;

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
