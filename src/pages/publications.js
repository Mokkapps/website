import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { getSrc } from 'gatsby-plugin-image';

import config from '../content/meta/config';
import { getAsset } from '../utils/helper';

import Footer from '../components/Footer';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import ProjectCard from '../components/ProjectCard';
import CardDivider from '../components/Card/CardDivider';

const PublicationsPage = props => {
  const {
    data: { talkAssets, seoImage },
  } = props;
  const { edges } = talkAssets;
  const { siteTitlePostfix, publications, siteUrl } = config;

  return (
    <Layout>
      <Article>
        <div className="flex flex-col items-center">
          <Heading i18nId="publicationsPage.title" />
          <h2 className="my-8 uppercase">
            <FormattedMessage id="publicationsPage.talks" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <div className="h-full bg-secondary flex flex-col items-center px-4 pb-4">
                      <CardDivider />
                      <div className="flex flex-col items-center flex-grow justify-evenly">
                        <p className="text-main-text">{date}</p>
                        <p className="text-main-text">{host}</p>
                        {slides ? (
                          <a href={slides} className="mt-2">
                            <FormattedMessage id="publicationsPage.slides" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </ProjectCard>
                );
              })}
          </div>
          <h2 className="my-8 uppercase">
            <FormattedMessage id="publicationsPage.articles" />
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
        </div>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Publications${siteTitlePostfix}`}
        description="A list of talks and articles from Michael Hoffmann"
        image={`${config.siteUrl}${getSrc(seoImage)}`}
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
    seoImage: file(relativePath: { eq: "og/og-publications.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    talkAssets: allFile(filter: { absolutePath: { regex: "/talks/" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              width: 700
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;
