import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import { graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Seo from '../components/Seo';
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

  const renderImage = imageData => {
    const image = getImage(imageData.localFile);
    return (
      <GatsbyImage
        className="m-2 border-2 border-secondary rounded-md shadow-md"
        key={imageData.link}
        image={image}
        alt="Mokkapps Tip Image"
      />
    );
  };

  return (
    <Layout>
      <Article>
        <Heading i18nId="tipsPage.title" />
        <p className="text-center my-8">
          <FormattedMessage id="tipsPage.intro" />
        </p>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab onClick={() => navigate('/tips?js')}>JavaScript</Tab>
            <Tab onClick={() => navigate('/tips?ts')}>TypeScript</Tab>
            <Tab onClick={() => navigate('/tips?html')}>HTML</Tab>
            <Tab onClick={() => navigate('/tips?css')}>CSS</Tab>
            <Tab onClick={() => navigate('/tips?other')}>Other</Tab>
          </TabList>

          <TabPanel className="flex flex-col justify-center">
            {javaScriptAlbum.images.map(renderImage)}
          </TabPanel>
          <TabPanel className="flex flex-col justify-center">
            {typeScriptAlbum.images.map(renderImage)}
          </TabPanel>
          <TabPanel className="flex flex-col justify-center">
            {htmlAlbum.images.map(renderImage)}
          </TabPanel>
          <TabPanel className="flex flex-col justify-center">
            {cssAlbum.images.map(renderImage)}
          </TabPanel>
          <TabPanel className="flex flex-col justify-center">
            {otherAlbum.images.map(renderImage)}
          </TabPanel>
        </Tabs>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Tips${siteTitlePostfix}`}
        description="A collection of tips for certain programming languages, frameworks and tools"
        image={`${config.siteUrl}${getSrc(seoImage)}`}
      />
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
          link
          localFile {
            childImageSharp {
              gatsbyImageData(width: 500, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
