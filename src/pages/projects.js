import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import PageArticle from '../components/PageArticle';
import Layout from '../components/Layout';

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
        <Menu/>
      </Header>
      <PageArticle>
        <Heading customStyle={headingStyle} title="MY PRIVATE PROJECTS" />
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
