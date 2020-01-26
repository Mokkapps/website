import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';
import FluidImage from '../FluidImage';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

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
          <FormattedHTMLMessage id="aboutParagraph2" />
        </AboutParagraph>
        <AboutParagraph>
          <FormattedHTMLMessage id="aboutParagraph3" />
        </AboutParagraph>
        <AboutParagraph>
          <FormattedHTMLMessage id="aboutParagraph6" />
        </AboutParagraph>
        <AboutParagraph>
          <FormattedMessage id="aboutParagraph4" />
        </AboutParagraph>
        <AboutParagraph>
          <FormattedHTMLMessage id="aboutParagraph5" />
        </AboutParagraph>
      </DescriptionContainer>
    </Margin>
  </Container>
);

AboutMe.propTypes = {
  images: PropTypes.object.isRequired
};

export default AboutMe;

