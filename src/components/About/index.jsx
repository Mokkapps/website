import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Skills from '../Skills';
import AboutMe from './AboutMe';
import HowIWork from './HowIWork';
import FluidImage from '../FluidImage';

const SkillsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  word-wrap: normal;
`;

const About = ({ images }) => (
  <section>
    <AboutMe images={images} />
    <SkillsContainer className="my-8" data-cy="about-skills">
      <Heading className="mb-8">SKILLS</Heading>
      <Skills />
    </SkillsContainer>
    <SkillsContainer className="mb-8" data-cy="about-how-i-work">
      <Heading className="mb-8">
        <FormattedMessage id="howIWork" />
      </Heading>
      <FluidImage class="my-8" image={images.consulting} />
      <HowIWork />
    </SkillsContainer>
  </section>
);

About.propTypes = {
  images: PropTypes.object.isRequired,
};

export default About;
