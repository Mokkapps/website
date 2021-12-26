import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import config from '@content/meta/config';
import { generateSeoImageUrl } from '@utils';

import Article from '@components/Article';
import Layout from '@components/Layout';
import Heading from '@components/Heading';

const BusinessCardPage = () => {
  const { siteTitlePostfix, siteUrl } = config;

  const seoImageUrl = generateSeoImageUrl('Business Card');

  return (
    <Layout
      seo={{
        url: `${siteUrl}/business-card`,
        title: `Business Card${siteTitlePostfix}`,
        description: 'Business card of Michael Hoffmann',
        image: seoImageUrl,
      }}
    >
      <Article>
        <Heading i18nId="businessCardPage.title" />
        <StaticImage
          className="border-2 border-secondary mb-4"
          src="../images/business-card/business-card-front.png"
          alt="Business Card Front"
        />
        <StaticImage
          className="border-2 border-secondary"
          src="../images/business-card/business-card-back.png"
          alt="Business Card Back"
        />
      </Article>
    </Layout>
  );
};

BusinessCardPage.propTypes = {};

export default BusinessCardPage;
