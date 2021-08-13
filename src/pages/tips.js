import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getSrc } from 'gatsby-plugin-image';
import { graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Gallery from '@browniebroke/gatsby-image-gallery';

import config from '../content/meta/config';

import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Heading';

const imageIdMap = {
  js: 'db2d3319-93fa-5810-a3bf-333083458bdb',
  ts: '42a2dd14-c0bf-5c77-8931-d938ee61dd8e',
  other: '265e925b-5fc1-59af-8758-ecbcffccbb91',
  html: '0e02c7a4-a4f9-54e5-9374-52b5065f2643',
  css: 'bdfa9b27-b54d-5451-8186-b5044c1c9e75',
};

const tabIndexMap = {
  js: 0,
  ts: 1,
  html: 2,
  css: 3,
  other: 4,
};

const TipsPage = props => {
  const {
    data: { imgurAlbums, seoImage },
    location: { search },
  } = props;
  const { siteUrl, siteTitlePostfix } = config;

  const [tabIndex, setTabIndex] = useState(
    tabIndexMap[search.replace('?', '')] || 0
  );

  const sortImages = (a, b) => {
    const { datetime: datetimeA } = a;
    const { datetime: datetimeB } = b;

    return datetimeB - datetimeA;
  };

  const javaScriptAlbum = imgurAlbums.nodes.find(
    node => node.id === imageIdMap.js
  );
  const typeScriptAlbum = imgurAlbums.nodes.find(
    node => node.id === imageIdMap.ts
  );
  const htmlAlbum = imgurAlbums.nodes.find(node => node.id === imageIdMap.html);
  const cssAlbum = imgurAlbums.nodes.find(node => node.id === imageIdMap.css);
  const otherAlbum = imgurAlbums.nodes.find(
    node => node.id === imageIdMap.other
  );

  const mapToChildImageSharp = imageData => imageData.localFile.childImageSharp;

  // eslint-disable-next-line react/prop-types
  const ImageWrapper = ({ children, onClick }) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="custom-image-gallery-wrapper" role="button" tabIndex={0} onClick={onClick}>
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
            <Tab
              onClick={() => navigate('/tips?js')}
              data-cy="tips-tab-javascript"
            >
              JavaScript
            </Tab>
            <Tab
              onClick={() => navigate('/tips?ts')}
              data-cy="tips-tab-typescript"
            >
              TypeScript
            </Tab>
            <Tab onClick={() => navigate('/tips?html')} data-cy="tips-tab-html">
              HTML
            </Tab>
            <Tab onClick={() => navigate('/tips?css')} data-cy="tips-tab-css">
              CSS
            </Tab>
            <Tab
              onClick={() => navigate('/tips?other')}
              data-cy="tips-tab-other"
            >
              Other
            </Tab>
          </TabList>

          <TabPanel
            className="flex flex-col justify-center"
            data-cy="tips-javascript-gallery"
          >
            <Gallery
              customWrapper={ImageWrapper}
              images={javaScriptAlbum.images
                .sort(sortImages)
                .map(mapToChildImageSharp)}
            />
          </TabPanel>
          <TabPanel
            className="flex flex-col justify-center"
            data-cy="tips-typescript-gallery"
          >
            <Gallery
              customWrapper={ImageWrapper}
              images={typeScriptAlbum.images
                .sort(sortImages)
                .map(mapToChildImageSharp)}
            />
          </TabPanel>
          <TabPanel
            className="flex flex-col justify-center"
            data-cy="tips-html-gallery"
          >
            <Gallery
              customWrapper={ImageWrapper}
              images={htmlAlbum.images
                .sort(sortImages)
                .map(mapToChildImageSharp)}
            />
          </TabPanel>
          <TabPanel
            className="flex flex-col justify-center"
            data-cy="tips-css-gallery"
          >
            <Gallery
              customWrapper={ImageWrapper}
              images={cssAlbum.images
                .sort(sortImages)
                .map(mapToChildImageSharp)}
            />
          </TabPanel>
          <TabPanel
            className="flex flex-col justify-center"
            data-cy="tips-other-gallery"
          >
            <Gallery
              customWrapper={ImageWrapper}
              images={otherAlbum.images
                .sort(sortImages)
                .map(mapToChildImageSharp)}
            />
          </TabPanel>
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
