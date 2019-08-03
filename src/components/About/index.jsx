import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { FormattedMessage } from 'react-intl';

import Skills from '../Skills';
import AboutMe from './AboutMe';
import HowIWork from './HowIWork';
import FluidImage from '../FluidImage';

const SkillsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  word-wrap: normal;
`;

const About = ({ images }) => (
  <section>
    <AboutMe images={images} />
    <Margin top={4} bottom={4}>
      <SkillsContainer data-cy="about-skills">
        <Heading>SKILLS</Heading>
        <Skills />
      </SkillsContainer>
    </Margin>
    <Margin bottom={4}>
      <SkillsContainer data-cy="about-how-i-work">
        <Heading>
          <FormattedMessage id="howIWork" />
        </Heading>
        <Margin bottom={4} top={4}>
          <FluidImage image={images.consulting} />
        </Margin>
        <HowIWork />
      </SkillsContainer>
    </Margin>
  </section>
);

About.propTypes = {
  images: PropTypes.object.isRequired
};

export default About;
