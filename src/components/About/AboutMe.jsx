import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';
import FluidImage from '../FluidImage';
import { FormattedMessage } from 'react-intl';

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
  width: 80%;
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
`;

const yearsOfExperience = new Date().getFullYear() - 2015;

const contactValue = {
  // eslint-disable-next-line react/display-name
  a: chunks => <a href="/contact">{chunks}</a>,
};

const AboutMe = ({ images }) => (
  <Container>
    <FluidImage image={images.intro} />
    <Margin top={2}>
      <SocialLinks data-cy="about-social-links">
        {config.socialLinks.map(link => (
          <SocialLink key={link.url} href={link.url} iconName={link.icon} />
        ))}
      </SocialLinks>
    </Margin>
    <Margin top={4}>
      <DescriptionContainer data-cy="about-description">
        <AboutParagraph>
          <FormattedMessage
            id="aboutParagraph"
            values={{
              years: yearsOfExperience,
            }}
          />
        </AboutParagraph>
        <AboutParagraph>
          <FormattedMessage id="aboutParagraph2" values={contactValue} />
        </AboutParagraph>
        <AboutParagraph>
          <FormattedMessage
            id="aboutParagraph3"
            values={{
              privateProjectsLink: (
                <a href="/projects">
                  <FormattedMessage id="privateProjectsLink" />
                </a>
              ),
              blogLink: (
                <a href="/blog">
                  <FormattedMessage id="blogLink" />
                </a>
              ),
              publicationLink: (
                <a href="/publications">
                  <FormattedMessage id="publicationLink" />
                </a>
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
        <AboutParagraph>
          <FormattedMessage
            id="aboutParagraph6"
            values={{
              // eslint-disable-next-line react/display-name
              a: chunks => <a href="/uses">{chunks}</a>,
            }}
          />
        </AboutParagraph>
        <AboutParagraph>
          <FormattedMessage id="aboutParagraph4" />
        </AboutParagraph>
        <AboutParagraph>
          <FormattedMessage id="aboutParagraph5" values={contactValue} />
        </AboutParagraph>
      </DescriptionContainer>
    </Margin>
  </Container>
);

AboutMe.propTypes = {
  images: PropTypes.object.isRequired,
};

export default AboutMe;
