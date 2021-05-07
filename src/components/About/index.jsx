import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { StaticImage } from 'gatsby-plugin-image';

import Skills from '../Skills';
import AboutMe from './AboutMe';
import HowIWork from './HowIWork';
import TestimonialSlider from '../TestimonialSlider';
import config from '../../content/meta/config';

const Heading = styled.h2`
  text-align: center;
  word-wrap: normal;
`;

const About = () => (
  <section>
    <AboutMe />
    <TestimonialSlider className="mx-auto mt-10 mb-5" />
    <div className="my-8 md:w-4/5 mx-auto" data-cy="about-skills">
      <Heading className="mb-8">SKILLS</Heading>
      <Skills />
    </div>
    <div className="mb-8 md:w-4/5 mx-auto" data-cy="about-how-i-work">
      <Heading className="mb-8">
        <FormattedMessage id="aboutPage.howIWork" />
      </Heading>
      <StaticImage
        alt={config.baseName}
        className="my-8 fluid-image"
        src="../../images/consulting2.jpg"
      />
      <HowIWork />
    </div>
  </section>
);

About.propTypes = {};

export default About;
