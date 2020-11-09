import React from 'react';
import styled from 'styled-components';
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
  const { siteTitlePostfix, siteUrl } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="newsletter" />
        <InfoText className="mb-4">
          <FormattedMessage id="newsletterInfo" />
        </InfoText>
        <InfoText className="mb-2">
          <FormattedMessage id="mailChimpInfo" />
        </InfoText>
        <NewsletterContainer className="mb-2">
          <a
            href="https://mailchimp.com/legal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="mailChimpInfoLink" />
          </a>
        </NewsletterContainer>
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
        title={`Newsletter${siteTitlePostfix}`}
        description="Subscribe for the newsletter to stay up-do-date on Mokkapps topics"
      />
    </Layout>
  );
};

export default NewsletterPage;
