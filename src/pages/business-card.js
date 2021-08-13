import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { StaticImage, getSrc } from 'gatsby-plugin-image';

import config from '../content/meta/config';

import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';

const BusinessCardPage = props => {
  const {
    data: { seoImage },
  } = props;

  const { siteTitlePostfix, siteUrl } = config;

  return (
    <Layout
      seo={{
        url: `${siteUrl}/business-card`,
        title: `Business Card${siteTitlePostfix}`,
        description: 'Business card of Michael Hoffmann',
        image: `${config.siteUrl}${getSrc(seoImage)}`,
      }}
    >
      <Article>
        <Heading i18nId="businessCardPage.title" />
        <StaticImage
          className="border-2 border-secondary mb-4"
          src="../images/business-card/business-card-front.png"
          alt="Business Card Front"
        />
        <StaticImage
          className="border-2 border-secondary"
          src="../images/business-card/business-card-back.png"
          alt="Business Card Back"
        />
      </Article>
    </Layout>
  );
};

BusinessCardPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BusinessCardPage;

export const query = graphql`
  query {
    seoImage: file(relativePath: { eq: "og/og-home.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
