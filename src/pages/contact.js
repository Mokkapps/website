import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import FluidImage from '../components/FluidImage';
import LinkButton from '../components/LinkButton';
import Availability from '../components/Availability';
import ScheduleMeetingButton from "../components/ScheduleMeetingButton";

const ContactPage = props => {
  const {
    data: { contactImage },
  } = props;
  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="contactMe" />
        <section className="flex flex-col justify-center items-center">
          <FluidImage image={contactImage} />
          <LinkButton
            className="mt-2 mb-4"
            dataCy="contact-about-me-button"
            href="/about"
            i18nId="moreAboutMeLink"
          />
          <Availability />
          <ScheduleMeetingButton
            dataCy="contact-hire-me-button"
            className="w-64 h-16 mb-2 uppercase"
          />
          <ContactForm />
        </section>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Contact${siteTitlePostfix}`}
        description="Contact Michael Hoffmann to hire him as a freelance software engineer or just ask him a question"
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const query = graphql`
  query {
    contactImage: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
