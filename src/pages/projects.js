import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const MarginCenteredWrapper = styled.div`
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

const Heading2 = styled.h2`
  text-align: center;
`;

const ProjectsPage = props => {
  const {
    data: { projectAssets, consultingImage },
  } = props;

  const { siteUrl, siteTitlePostfix, customers } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="businessProjectsHeading" />
        <MarginCenteredWrapper className="my-8">
          <span>
            <Link to="/contact">
              <FormattedMessage id="getInTouch" />
            </Link>
            <FormattedMessage id="detailedProjectList" />
          </span>
          <MarginCenteredWrapper className="mt-8">
            <FluidImage image={consultingImage} />
          </MarginCenteredWrapper>
          <MarginCenteredWrapper className="my-8">
            <span>
              <FormattedMessage id="workedWith" />
            </span>
            <CustomerNames className="mt-3">
              {customers.map(customer => (
                <Customer className="mx-2" key={customer}>
                  {customer}
                </Customer>
              ))}
            </CustomerNames>
          </MarginCenteredWrapper>
        </MarginCenteredWrapper>
        <Heading2>
          <FormattedMessage id="privateProjectsHeading"></FormattedMessage>
        </Heading2>
        <ProjectList projectAssets={projectAssets} />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Projects${siteTitlePostfix}`}
        description="A list of all private and business projects from Michael Hoffmann"
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
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    projectAssets: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
