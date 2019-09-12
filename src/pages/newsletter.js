import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { FormattedMessage } from 'react-intl';

import config from '../content/meta/config';

import Article from '../components/Article';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import NewsletterSubscription from '../components/NewsletterSubscription';
import LinkButton from '../components/LinkButton';

const InfoText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NewsletterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NewsletterPage = () => {
  const { siteUrl, siteDescription } = config;

  return (
    <Layout>
      <Article narrow>
        <Heading i18nId="newsletter" />
        <Margin bottom={4}>
          <InfoText>
            <FormattedMessage id="newsletterInfo" />
          </InfoText>
        </Margin>
        <NewsletterContainer>
          <NewsletterSubscription />
        </NewsletterContainer>
        <LinkButton
          dataCy="newsletter-archive-link-button"
          href="https://tinyletter.com/Mokkapps/archive"
          i18nId="visitArchive"
        />
      </Article>
      <Footer hideNewsletter />
      <Seo
        url={siteUrl}
        title={`Newsletter | ${siteDescription}`}
        description={siteDescription}
      />
    </Layout>
  );
};

export default NewsletterPage;
