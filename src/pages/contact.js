import React from 'react';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Header from '../components/Header';
import Seo from '../components/Seo';

const ContactPage = () => {
  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <Menu/>
      </Header>
      <Article narrow>
        <Heading title="CONTACT ME" />
        <ContactForm />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default ContactPage;
