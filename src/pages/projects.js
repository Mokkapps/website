import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { FormattedMessage } from 'react-intl';

import config from '../content/meta/config';
import { MokkappsLightGray } from '../styles/variables';

import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import FluidImage from '../components/FluidImage';
import Seo from '../components/Seo';

const MarginCenteredWrapper = styled(Margin)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomerNames = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Customer = styled.p`
  background-color: ${MokkappsLightGray}; 
  font-weight: bold;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  padding: 10px 20px;
`;

const ProjectsPage = props => {
  const {
    data: { projectAssets, consultingImage },
  } = props;

  const { siteUrl, siteDescription, customers } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="businessProjectsHeading" />
        <MarginCenteredWrapper top={4} bottom={4}>
          <span>
            <a href="/contact">
              <FormattedMessage id="getInTouch" />
            </a>
            <FormattedMessage id="detailedProjectList" />
          </span>
          <MarginCenteredWrapper top={3} bottom={2}>
            <FluidImage image={consultingImage} />
          </MarginCenteredWrapper>
          <MarginCenteredWrapper top={2} bottom={2}>
            <span>
              <FormattedMessage id="workedWith" />
            </span>
            <Margin top={3}>
              <CustomerNames>
                {customers.map(customer => (
                  <Margin
                    right={2}
                    left={2}
                    key={customer}
                  >
                    <Customer>{customer}</Customer>
                  </Margin>
                ))}
              </CustomerNames>
            </Margin>
          </MarginCenteredWrapper>
        </MarginCenteredWrapper>
        <Heading i18nId="privateProjectsHeading" />
        <ProjectList projectAssets={projectAssets} />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
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
    consultingImage: file(relativePath: { eq: "consulting1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
