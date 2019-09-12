import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import config from '../content/meta/config';

import Article from '../components/Article';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import NewsletterSubscription from '../components/NewsletterSubscription';

const InfoText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArchiveList = styled.ul`
  display: flex;
  justify-content: center;
`;

const ArchiveHeader = styled.h2`
  text-align: center;
`;

const NewsletterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NewsletterPage = props => {
  const {
    data: {
      newsletter: { edges },
    },
  } = props;
  const newsletterEvents = edges.map(edge => edge.node);
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
        {newsletterEvents.length > 0 ? (
          <div>
            <Margin top={4}>
              <ArchiveHeader>Archive</ArchiveHeader>
            </Margin>
            <ArchiveList>
              {newsletterEvents.map(ev => (
                <li key={ev.fields.slug}>
                  <Link to={ev.fields.slug}>
                    {new Date(ev.frontmatter.title).toLocaleDateString()}
                  </Link>
                </li>
              ))}
            </ArchiveList>
          </div>
        ) : null}
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

NewsletterPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    newsletter: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/newsletter.*/" } } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
