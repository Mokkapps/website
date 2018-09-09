import React from 'react';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Header from '../components/Header';
import Seo from '../components/Seo';

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
      <Article>
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

export default PublicationsPage;
