import React from 'react';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CustomMenu from '../components/CustomMenu';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';
import PageArticle from '../components/PageArticle';

import '../styles/global';
import '../styles/variables';

const PublicationsPage = () => {
  const {
    publications,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config;

  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <CustomMenu items={menuItems} />
      </Header>
      <PageArticle>
        <Heading title="📚 Publications" />
        <h1 style={{ marginBottom: '1rem' }}>Talks</h1>
        <ul>
          {publications.filter(p => p.type === 'talk').map(p => (
            <li style={{ marginTop: '1rem' }}>
              <a href={p.link}>{p.title}</a>
            </li>
          ))}
        </ul>
        <h1 style={{ marginBottom: '1rem', marginTop: '1rem' }}>Articles</h1>
        <ul>
          {publications.filter(p => p.type === 'article').map(p => (
            <li style={{ marginTop: '1rem' }}>
              <a href={p.link}>{p.title}</a>
            </li>
          ))}
        </ul>
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

export default PublicationsPage;
