import React from 'react';
import { FormattedMessage } from 'react-intl';

import config from '@content/meta/config';
import { generateSeoImageUrl } from '@utils';

import Article from '@components/Article';
import Layout from '@components/Layout';
import Heading from '@components/Heading';

const SuccessPage = () => {
  const { siteTitlePostfix, siteUrl } = config;

  const seoImageUrl = generateSeoImageUrl('Success');

  return (
    <Layout
      seo={{
        url: `${siteUrl}/success`,
        title: `Contact Success${siteTitlePostfix}`,
        description: 'The contact request was sent successfully',
        image: seoImageUrl
      }}
    >
      <Article>
        <Heading i18nId="contactPage.contactSuccess" />
        <section className="flex flex-col justify-center items-center my-8">
          <FormattedMessage id="contactPage.contactSuccessDescr" />
        </section>
      </Article>
    </Layout>
  );
};

SuccessPage.propTypes = {};

export default SuccessPage;
