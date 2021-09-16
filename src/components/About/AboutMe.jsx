import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import config from '../../content/meta/config';
import { yearsOfExperience } from '../../utils/helper';
import { StaticImage } from 'gatsby-plugin-image';
import AboutParagraph from './AboutParagraph';
import SocialLinks from '../SocialLink/SocialLinks';

const AboutMe = () => (
  <section className="flex flex-col justify-center items-center">
    <StaticImage
      alt={config.baseNameWithTitle}
      className="fluid-image"
      src="../../images/about.jpg"
    />
    <div
      className="flex lg:hidden justify-center flex-wrap mt-8"
      data-cy="about-social-links"
    >
      <SocialLinks onlyFavorites />
    </div>
    <div className="m-auto mt-8" data-cy="about-description">
      <AboutParagraph
        id="aboutPage.paragraph1"
        values={{
          years: yearsOfExperience,
        }}
      />
      <AboutParagraph
        className="mt-4"
        id="aboutPage.paragraph2"
        values={{
          // eslint-disable-next-line react/display-name
          a: chunks => <Link to="/contact">{chunks}</Link>,
        }}
      />
      <AboutParagraph
        className="mt-4"
        id="aboutPage.paragraph3"
        values={{
          privateProjectsLink: (
            <Link to="/projects">
              <FormattedMessage id="aboutPage.privateProjectsLink" />
            </Link>
          ),
          blogLink: (
            <Link to="/blog">
              <FormattedMessage id="aboutPage.blogLink" />
            </Link>
          ),
          inDepthDevLink: (
            <a
              href="https://indepth.dev/authors/1080/michael-hoffmann"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="aboutPage.inDepthDevLink" />
            </a>
          ),
          publicationLink: (
            <Link to="/publications">
              <FormattedMessage id="aboutPage.publicationLink" />
            </Link>
          ),
          angularArchitectsLink: (
            <a
              href="https://www.angulararchitects.io/"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="aboutPage.angularArchitectsLink" />
            </a>
          ),
          gitHubLink: (
            <a
              href="https://github.com/Mokkapps"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="aboutPage.gitHubLink" />
            </a>
          ),
        }}
      />
      <AboutParagraph
        className="mt-4"
        id="aboutPage.paragraph6"
        values={{
          // eslint-disable-next-line react/display-name
          a: chunks => <Link to="/uses">{chunks}</Link>,
        }}
      />
      <AboutParagraph className="mt-4" id="aboutPage.paragraph4" />
      <AboutParagraph
        className="mt-4"
        id="aboutPage.paragraph5"
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
