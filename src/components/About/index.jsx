import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Skills from '../Skills';
import AboutMe from './AboutMe';
import HowIWork from './HowIWork';
import Testimonials from '../Testimonials';
import { StaticImage } from 'gatsby-plugin-image';

const Heading = styled.h2`
  text-align: center;
  word-wrap: normal;
`;

const About = () => (
  <section>
    <AboutMe />
    <div className="my-8 md:w-4/5 mx-auto" data-cy="about-skills">
      <Testimonials className="mx-auto my-10" />
      <Heading className="mb-8">SKILLS</Heading>
      <Skills />
    </div>
    <div className="mb-8 md:w-4/5 mx-auto" data-cy="about-how-i-work">
      <Heading className="mb-8">
        <FormattedMessage id="howIWork" />
      </Heading>
      <StaticImage alt="Consulting Image" className="my-8 fluid-image" src="../../images/consulting2.jpg" />
      <HowIWork />
    </div>
  </section>
);

About.propTypes = {};

export default About;
