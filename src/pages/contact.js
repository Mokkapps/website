import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import FluidImage from '../components/FluidImage';
import LinkButton from '../components/LinkButton';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactPage = props => {
  const {
    data: { contactImage },
  } = props;
  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout>
      <Article narrow>
        <Heading i18nId="contactMe" />
        <Container>
          <FluidImage image={contactImage} />
          <Margin top={2}>
            <LinkButton
              dataCy="contact-about-me-button"
              href="/about"
              i18nId="moreAboutMeLink"
            />
          </Margin>
          <ContactForm />
        </Container>
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
