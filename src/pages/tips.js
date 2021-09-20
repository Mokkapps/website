import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getSrc } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Gallery from '@browniebroke/gatsby-image-gallery';

import config from '../content/meta/config';

import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Heading';

export const imgurAlbumMap = {
  vue: {
    albumId: '27cb6538-d9a5-5f84-999e-a3fb8785e7e4',
    tabIndex: 0,
    displayName: 'Vue.js',
  },
  js: {
    albumId: 'db2d3319-93fa-5810-a3bf-333083458bdb',
    tabIndex: 1,
    displayName: 'JavaScript',
  },
  ts: {
    albumId: '42a2dd14-c0bf-5c77-8931-d938ee61dd8e',
    tabIndex: 2,
    displayName: 'TypeScript',
  },
  html: {
    albumId: '0e02c7a4-a4f9-54e5-9374-52b5065f2643',
    tabIndex: 3,
    displayName: 'HTML',
  },
  css: {
    albumId: 'bdfa9b27-b54d-5451-8186-b5044c1c9e75',
    tabIndex: 4,
    displayName: 'CSS',
  },
  other: {
    albumId: '265e925b-5fc1-59af-8758-ecbcffccbb91',
    tabIndex: 5,
    displayName: 'Other',
  },
};

const TipsPage = props => {
  const {
    data: { imgurAlbums, seoImage },
  } = props;
  const { siteUrl, siteTitlePostfix } = config;

  const [tabIndex, setTabIndex] = useState(0);

  const sortImages = (a, b) => {
    const { datetime: datetimeA } = a;
    const { datetime: datetimeB } = b;

    return datetimeB - datetimeA;
  };

  const getAlbumNodes = key =>
    imgurAlbums.nodes.find(node => node.id === imgurAlbumMap[key].albumId);

  const mapToChildImageSharp = imageData => imageData.localFile.childImageSharp;

  // eslint-disable-next-line react/prop-types
  const ImageWrapper = ({ children, onClick }) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="custom-image-gallery-wrapper"
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      {children}
    </div>
  );

  return (
    <Layout
      seo={{
        url: `${siteUrl}/tips`,
        title: `Tips${siteTitlePostfix}`,
        description:
          'A collection of tips for certain programming languages, frameworks and tools',
        image: `${config.siteUrl}${getSrc(seoImage)}`,
      }}
    >
      <Article>
        <Heading i18nId="tipsPage.title" />
        <p className="text-center my-8">
          <FormattedMessage id="tipsPage.intro" />
        </p>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={index => setTabIndex(index)}
          data-cy="tips-tabs"
        >
          <TabList>
            {Object.entries(imgurAlbumMap).map(([key, value]) => (
              <Tab key={key} data-cy={`tips-tab-${key}`}>
                {value.displayName}
              </Tab>
            ))}
          </TabList>

          {Object.keys(imgurAlbumMap).map(key => (
            <TabPanel
              key={key}
              className="flex flex-col justify-center"
              data-cy={`tips-${key}-gallery`}
            >
              <Gallery
                customWrapper={ImageWrapper}
                images={getAlbumNodes(key)
                  .images.sort(sortImages)
                  .map(mapToChildImageSharp)}
              />
            </TabPanel>
          ))}
        </Tabs>
      </Article>
    </Layout>
  );
};

TipsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default TipsPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-tips.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    imgurAlbums: allImgurAlbum {
      nodes {
        id
        title
        images_count
        images {
          datetime
          link
          localFile {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 200
                height: 100
                placeholder: BLURRED
              )
              full: gatsbyImageData(width: 500, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
