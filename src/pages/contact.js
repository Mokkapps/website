import React from 'react';
import PropTypes from 'prop-types';
import { getSrc, StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import config from '../content/meta/config';

import ContactForm from '../components/ContactForm';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import LinkButton from '../components/LinkButton';
import Availability from '../components/Availability';
import ScheduleMeetingButton from '../components/ScheduleMeetingButton';

const ContactPage = props => {
  const {
    data: { seoImage },
  } = props;
  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout
      seo={{
        url: `${siteUrl}/contact`,
        title: `Contact${siteTitlePostfix}`,
        description:
          'Contact Michael Hoffmann to hire him as a freelance software engineer or just ask him a question',
        image: `${config.siteUrl}${getSrc(seoImage)}`,
      }}
    >
      <Article>
        <Heading i18nId="contactPage.title" />
        <section className="flex flex-col justify-center items-center">
          <StaticImage
            alt="Michael Hoffmann Image"
            className="fluid-image"
            src="../images/contact.jpg"
          />
          <LinkButton
            className="mt-2"
            dataCy="contact-about-me-button"
            href="/about"
            i18nId="general.moreAboutMeLink"
          />
          <Availability className="my-5" dataCy="contact-availability" />
          <ScheduleMeetingButton
            dataCy="contact-hire-me-button"
            className="w-64 h-16 mb-2"
          />
          <ContactForm />
        </section>
      </Article>
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-contact.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
