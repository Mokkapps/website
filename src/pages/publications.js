import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import config from '../content/meta/config';
import { getAsset } from '../utils/helper';

import Footer from '../components/Footer';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import ProjectCard from '../components/ProjectCard';

const Talks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const TalkInfo = styled.div`
  border-top: 1px solid gray;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TalkText = styled.p`
  margin-bottom: 0.5rem;
`;

const PublicationsPage = props => {
  const {
    data: { talkAssets },
  } = props;
  const { edges } = talkAssets;
  const { siteTitlePostfix, publications, siteUrl } = config;

  return (
    <Layout>
      <Article>
        <Content>
          <Heading i18nId="publicationsHeading" />
          <h2 className="my-8">
            <FormattedMessage id="talks" />
          </h2>
          <Talks>
            {publications
              .filter(p => p.type === 'talk')
              .map((talk, i) => {
                const { link, title, date, host, slides, image } = talk;
                return (
                  <ProjectCard
                    className="mb-2 mr-2"
                    id={i}
                    key={i}
                    usedTechnologies={[]}
                    asset={getAsset(edges, image)}
                    title={title}
                    description={host + ': ' + date}
                    urls={{ page: link }}
                    minimal
                  >
                    <TalkInfo>
                      <TalkText>{date}</TalkText>
                      <TalkText>{host}</TalkText>
                      {slides ? (
                        <a href={slides}>
                          <FormattedMessage id="slides" />
                        </a>
                      ) : null}
                    </TalkInfo>
                  </ProjectCard>
                );
              })}
          </Talks>
          <h2 className="my-8">
            <FormattedMessage id="articles" />
          </h2>
          <ul>
            {publications
              .filter(p => p.type === 'article')
              .map(p => (
                <li key={p.link} style={{ marginTop: '1rem' }}>
                  <a href={p.link}>{p.title}</a>
                </li>
              ))}
          </ul>
        </Content>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Publications${siteTitlePostfix}`}
        description="A list of talks and articles from Michael Hoffmann"
      />
    </Layout>
  );
};

PublicationsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PublicationsPage;

export const query = graphql`
  query {
    talkAssets: allFile(filter: { absolutePath: { regex: "/talks/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
