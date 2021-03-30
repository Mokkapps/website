import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';
import { yearsOfExperience } from '../../utils/helper';
import { StaticImage } from 'gatsby-plugin-image';

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
`;

const AboutMe = () => (
  <Container>
    <StaticImage
      alt={config.baseName}
      className="fluid-image"
      src="../../images/about.jpg"
    />
    <SocialLinks className="mt-8" data-cy="about-social-links">
      {config.socialLinks.map(link => (
        <SocialLink link={link} key={link.id} />
      ))}
    </SocialLinks>
    <DescriptionContainer className="mt-8" data-cy="about-description">
      <AboutParagraph>
        <FormattedMessage
          id="aboutParagraph"
          values={{
            years: yearsOfExperience,
          }}
        />
      </AboutParagraph>
      <AboutParagraph className="mt-4">
        <FormattedMessage
          id="aboutParagraph2"
          values={{
            // eslint-disable-next-line react/display-name
            a: chunks => <Link to="/contact">{chunks}</Link>,
          }}
        />
      </AboutParagraph>
      <AboutParagraph className="mt-4">
        <FormattedMessage
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
      </AboutParagraph>
      <AboutParagraph className="mt-4">
        <FormattedMessage
          id="aboutParagraph6"
          values={{
            // eslint-disable-next-line react/display-name
            a: chunks => <Link to="/uses">{chunks}</Link>,
          }}
        />
      </AboutParagraph>
      <AboutParagraph className="mt-4">
        <FormattedMessage id="aboutParagraph4" />
      </AboutParagraph>
      <AboutParagraph className="mt-4">
        <FormattedMessage
          id="aboutParagraph5"
          values={{
            // eslint-disable-next-line react/display-name
            a: chunks => <Link to="/contact">{chunks}</Link>,
          }}
        />
      </AboutParagraph>
    </DescriptionContainer>
  </Container>
);

AboutMe.propTypes = {};

export default AboutMe;
