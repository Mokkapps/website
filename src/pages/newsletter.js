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

const InfoText = styled.p`
  width: 100%;
  text-align: center;
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
        <Margin bottom={2}>
          <InfoText>
            <FormattedMessage id="mailChimpInfo" />
          </InfoText>
        </Margin>
        <Margin bottom={2}>
          <NewsletterContainer>
            <a
              href="https://mailchimp.com/legal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="mailChimpInfoLink" />
            </a>
          </NewsletterContainer>
        </Margin>
        <NewsletterContainer>
          <NewsletterSubscription />
        </NewsletterContainer>
        <LinkButton
          dataCy="newsletter-archive-link-button"
          href="https://us19.campaign-archive.com/home/?u=587746a905932c04ed4e175bb&id=220816f8fa"
          i18nId="visitArchive"
        />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Newsletter | ${siteDescription}`}
        description={siteDescription}
      />
    </Layout>
  );
};

export default NewsletterPage;
