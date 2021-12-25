import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { getSrc, StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'react-intl';

import { baseFormattedMessageValues } from '@utils';
import config from '@content/meta/config';

import Article from '@components/Article';
import Layout from '@components/Layout';
import Heading from '@components/Heading';
import AboutMe from '@components/About/AboutMe';
import Skills from '@components/Skills';
import HowIWork from '@components/About/HowIWork';
import References from '@components/References';

const AboutPage = props => {
  const {
    data: { seoImage },
  } = props;
  const { siteTitlePostfix, siteUrl, siteDescription } = config;

  return (
    <Layout
      seo={{
        url: `${siteUrl}/about`,
        title: `About${siteTitlePostfix}`,
        description: siteDescription,
        image: `${config.siteUrl}${getSrc(seoImage)}`,
      }}
    >
      <Article>
        <Heading i18nId="aboutPage.title" />
        <section className="mt-8">
          <AboutMe />
          <div className="mt-8">
            <h2 className="mb-8 text-center">
              <FormattedMessage id="aboutPage.references" />
            </h2>
            <References />
          </div>
          <div className="mt-8 mb-12 md:w-4/5 mx-auto" data-cy="about-skills">
            <h2 className="mb-8 text-center">Skills</h2>
            <Skills />
          </div>
          <div className="mb-8 md:w-4/5 mx-auto" data-cy="about-how-i-work">
            <h2 className="mb-8 text-center">
              <FormattedMessage
                id="aboutPage.howIWork"
                values={{ ...baseFormattedMessageValues }}
              />
            </h2>
            <StaticImage
              alt={config.baseNameWithTitle}
              className="my-8 fluid-image"
              src="../images/consulting2.jpg"
            />
            <HowIWork />
          </div>
        </section>
      </Article>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-home.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
