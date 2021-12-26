import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import config from '@content/meta/config';
import { generateSeoImageUrl } from '@utils';

import ContactForm from '@components/ContactForm';
import Article from '@components/Article';
import Layout from '@components/Layout';
import Heading from '@components/Heading';
import LinkButton from '@components/LinkButton';
import Availability from '@components/Availability';
import ScheduleMeetingButton from '@components/ScheduleMeetingButton';

const ContactPage = () => {
  const { siteUrl, siteTitlePostfix } = config;

  const seoImageUrl = generateSeoImageUrl('Contact me');

  return (
    <Layout
      seo={{
        url: `${siteUrl}/contact`,
        title: `Contact${siteTitlePostfix}`,
        description:
          'Contact Michael Hoffmann to hire him as a freelance software engineer or just ask him a question',
        image: seoImageUrl,
      }}
    >
      <Article>
        <Heading i18nId="contactPage.title" />
        <section className="flex flex-col justify-center items-center">
          <StaticImage
            alt="Michael Hoffmann Image"
            className="fluid-image"
            src="../images/contact.jpg"
          />
          <LinkButton
            className="mt-2"
            dataCy="contact-about-me-button"
            href="/about"
            i18nId="general.moreAboutMeLink"
          />
          <Availability className="my-5" dataCy="contact-availability" />
          <ScheduleMeetingButton
            dataCy="contact-hire-me-button"
            className="w-64 h-16 mb-2"
          />
          <ContactForm />
        </section>
      </Article>
    </Layout>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
