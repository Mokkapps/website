import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';

const ProjectsPage = props => {
  const {
    data: { projectAssets },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Article>
        <Heading title="MY PRIVATE PROJECTS" />
        <ProjectList projectAssets={projectAssets} />
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

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired
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
