import React from 'react';
import { css } from 'emotion';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CustomMenu from '../components/CustomMenu';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';
import ContactForm from '../components/ContactForm';
import PageArticle from '../components/PageArticle';

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
        <HeaderLogo />
        <CustomMenu items={menuItems} />
      </Header>
      <PageArticle>
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
