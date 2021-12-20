import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { getSrc, StaticImage } from 'gatsby-plugin-image';

import config from '../content/meta/config';

import ProjectList from '../components/ProjectList';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import BusinessProjectList from '../components/BusinessProjectsList';

const ProjectsPage = props => {
  const {
    data: { projectAssets, seoImage },
  } = props;

  const { siteUrl, siteTitlePostfix, customers } = config;

  const customerList = (
    <div className="flex flex-col items-center justify-center w-full  my-8">
      <span>
        <FormattedMessage id="projectsPage.workedWith" />
      </span>
      <section className="my-4 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col gap-4">
        {customers.map(customer => (
          <div
            className="flex justify-center items-center bg-secondary align-middle text-center shadow-md rounded-lg py-2 px-4 border border-text-main"
            key={customer}
          >
            <span className="font-bold">{customer}</span>
          </div>
        ))}
      </section>
    </div>
  );

  const image = (
    <div className="flex flex-col items-center justify-center w-full mt-8">
      <StaticImage
        alt={config.baseNameWithTitle}
        className="fluid-image"
        src="../images/consulting1.jpg"
      />
    </div>
  );

  return (
    <Layout
      seo={{
        url: `${siteUrl}/projects`,
        title: `Projects${siteTitlePostfix}`,
        image: `${config.siteUrl}${getSrc(seoImage)}`,
        description:
          'A list of all private and business projects from Michael Hoffmann',
      }}
    >
      <Article>
        <Heading i18nId="projectsPage.businessProjectsHeading" />
        <div className="flex flex-col items-center justify-center w-full my-8">
          {image}
          {customerList}
          <p className="text-center">
            <FormattedMessage id="projectsPage.businessProjectsExcerpt" />
          </p>
          <BusinessProjectList dataCy="projects-business-projects"/>
          <p className="my-8 text-center">
            <Link to="/contact">
              <FormattedMessage id="projectsPage.getInTouch" />
            </Link>
            <FormattedMessage id="projectsPage.detailedProjectList" />
          </p>
        </div>
        <h2 className="text-center mb-8">
          <FormattedMessage id="projectsPage.privateProjectsHeading" />
        </h2>
        <ProjectList projectAssets={projectAssets} />
      </Article>
    </Layout>
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectsPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-projects.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    projectAssets: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              width: 600
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;
