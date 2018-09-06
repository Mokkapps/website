import React from 'react';
import { css } from 'emotion';

import Header from '@react-website-themes/default/components/Header';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import PageArticle from '../components/PageArticle';
import Layout from '../components/Layout';
import Heading from '../components/Heading';

import '../styles/global';
import '../styles/variables';

const headingStyle = css`
  display: flex;
  justify-content: center;
`;

const ContactPage = () => {
  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <Menu/>
      </Header>
      <PageArticle narrow>
        <Heading customStyle={headingStyle} title="CONTACT ME" />
        <ContactForm />
      </PageArticle>
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
