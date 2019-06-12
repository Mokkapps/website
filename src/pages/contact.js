import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import FluidImage from '../components/FluidImage';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactPage = props => {
  const {
    data: { contactImage },
  } = props;
  const { siteUrl, siteDescription } = config;

  return (
    <Layout>
      <Article narrow>
        <Heading i18nId="contactMe" />
        <Container>
          <FluidImage image={contactImage} />
          <ContactForm />
        </Container>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Contact | ${siteDescription}`}
        description={siteDescription}
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
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
