import React from 'react';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import PageArticle from '../components/PageArticle';
import Layout from '../components/Layout';

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
        <Menu/>
      </Header>
      <PageArticle>
        <Heading title="PUBLICATIONS" />
        <h1 style={{ marginBottom: '1rem' }}>Talks</h1>
        <ul>
          {publications.filter(p => p.type === 'talk').map(p => (
            <li style={{ marginTop: '1rem' }}>
              <a href={p.link}>{p.title}</a>
            </li>
          ))}
        </ul>
        <h1 style={{ marginBottom: '1rem', marginTop: '3rem' }}>Articles</h1>
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
