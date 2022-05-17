import React from 'react';
import { graphql, Link } from "gatsby";
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import config from 'content/meta/config';
import { getAsset, generateSeoImageUrl } from 'utils';

import Article from 'components/Article';
import Layout from 'components/Layout';
import Heading from 'components/Heading';
import ProjectCard from 'components/ProjectCard';
import Divider from 'components/Divider';

const PublicationsPage = props => {
  const {
    data: { talkAssets },
  } = props;
  const { edges } = talkAssets;
  const { siteTitlePostfix, publications, siteUrl } = config;

  const seoImageUrl = generateSeoImageUrl('Publications');

  return (
    <Layout
      seo={{
        url: `${siteUrl}/publications`,
        title: `Publications${siteTitlePostfix}`,
        description: 'A list of talks and articles from Michael Hoffmann',
        image: seoImageUrl,
      }}
    >
      <Article>
        <div className="flex flex-col items-center">
          <Heading i18nId="publicationsPage.title" />
          <h2 className="mb-8">eBooks</h2>
          <ul data-cy="publications-ebooks-section">
            <li>
              <Link to="/ebook/27-helpful-tips-for-vue-developers">27 Helpful Tips for Vue Developers</Link>
            </li>
          </ul>
          <h2 className="my-8">
            <FormattedMessage id="publicationsPage.talks" />
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            data-cy="publications-talks-section"
          >
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
                    <div className="h-full bg-secondary flex flex-col items-center px-4 pb-4 rounded-b-md">
                      <Divider />
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
          <h2 className="my-8">
            <FormattedMessage id="publicationsPage.articles" />
          </h2>
          <ul data-cy="publications-articles-section">
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
