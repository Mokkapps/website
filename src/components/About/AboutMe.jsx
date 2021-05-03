import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink/SocialLink';
import { yearsOfExperience } from '../../utils/helper';
import { StaticImage } from 'gatsby-plugin-image';
import AboutParagraph from './AboutParagraph';

const AboutMe = () => (
  <section className="flex flex-col justify-center items-center">
    <StaticImage
      alt={config.baseName}
      className="fluid-image"
      src="../../images/about.jpg"
    />
    <div
      className="flex justify-center flex-wrap mt-8"
      data-cy="about-social-links"
    >
      {config.socialLinks.map(link => (
        <SocialLink link={link} key={link.id} />
      ))}
    </div>
    <div className="m-auto mt-8" data-cy="about-description">
      <AboutParagraph
        id="aboutParagraph"
        values={{
          years: yearsOfExperience,
        }}
      />
      <AboutParagraph
        className="mt-4"
        id="aboutParagraph2"
        values={{
          // eslint-disable-next-line react/display-name
          a: chunks => <Link to="/contact">{chunks}</Link>,
        }}
      />
      <AboutParagraph
        className="mt-4"
        id="aboutParagraph3"
        values={{
          privateProjectsLink: (
            <Link to="/projects">
              <FormattedMessage id="privateProjectsLink" />
            </Link>
          ),
          blogLink: (
            <Link to="/blog">
              <FormattedMessage id="blogLink" />
            </Link>
          ),
          inDepthDevLink: (
            <a
              href="https://indepth.dev/authors/1080/michael-hoffmann"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="inDepthDevLink" />
            </a>
          ),
          publicationLink: (
            <Link to="/publications">
              <FormattedMessage id="publicationLink" />
            </Link>
          ),
          angularArchitectsLink: (
            <a
              href="https://www.angulararchitects.io/"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="angularArchitectsLink" />
            </a>
          ),
          gitHubLink: (
            <a
              href="https://github.com/Mokkapps"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="gitHubLink" />
            </a>
          ),
        }}
      />
      <AboutParagraph
        className="mt-4"
        id="aboutParagraph6"
        values={{
          // eslint-disable-next-line react/display-name
          a: chunks => <Link to="/uses">{chunks}</Link>,
        }}
      />
      <AboutParagraph className="mt-4" id="aboutParagraph4" />
      <AboutParagraph
        className="mt-4"
        id="aboutParagraph5"
        values={{
          // eslint-disable-next-line react/display-name
          a: chunks => <Link to="/contact">{chunks}</Link>,
        }}
      />
    </div>
  </section>
);

AboutMe.propTypes = {};

export default AboutMe;
