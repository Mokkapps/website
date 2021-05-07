import React from 'react';
import { FormattedMessage } from 'react-intl';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Heading from '../components/Heading';

const SuccessPage = () => {
  const { siteTitlePostfix, siteUrl } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="contactPage.contactSuccess" />
        <section className="flex flex-col justify-center items-center my-8">
          <FormattedMessage id="contactPage.contactSuccessDescr" />
        </section>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Contact Success${siteTitlePostfix}`}
        description="The contact request was sent successfully"
      />
    </Layout>
  );
};

SuccessPage.propTypes = {};

export default SuccessPage;
