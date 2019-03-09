import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Margin } from 'styled-components-spacing';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';

const MarginCenteredWrapper = styled(Margin)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectLogos = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectsPage = props => {
  const {
    data: { projectAssets, companyLogoAssets },
  } = props;

  const { edges } = companyLogoAssets;
  const { siteUrl, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Article>
        <Heading title="BUSINESS PROJECTS" />
        <MarginCenteredWrapper top={4} bottom={4}>
          <span>
            <a href="/contact">Get in touch</a> if you want to have a detailed
            list of projects I have worked on in my professional career.
          </span>
          <MarginCenteredWrapper top={2} bottom={2}>
            <span>I’ve been lucky to work with:</span>
            <Margin top={3}>
              <ProjectLogos>
                {edges.map(edge => (
                  <Margin
                    right={2}
                    left={2}
                    key={edge.node.childImageSharp.fixed.src}
                  >
                    <Img fixed={edge.node.childImageSharp.fixed} />
                  </Margin>
                ))}
              </ProjectLogos>
            </Margin>
          </MarginCenteredWrapper>
        </MarginCenteredWrapper>
        <Heading title="MY PRIVATE PROJECTS" />
        <ProjectList projectAssets={projectAssets} />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={`Projects | ${siteDescription}`}
        description={siteDescription}
      />
    </Layout>
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
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
    companyLogoAssets: allFile(
      filter: { absolutePath: { regex: "/company_logos/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
