import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import Skills from '../Skills';
import AboutMe from './AboutMe';
import HowIWork from './HowIWork';

const SkillsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  word-wrap: normal;
`;

const About = ({ aboutImage }) => (
  <section>
    <AboutMe aboutImage={aboutImage} />
    <Margin top={4} bottom={4}>
      <SkillsContainer data-cy="about-skills">
        <Heading>SKILLS</Heading>
        <Skills />
      </SkillsContainer>
    </Margin>
    <Margin bottom={4}>
      <SkillsContainer data-cy="about-how-i-work">
        <Heading>HOW I WORK</Heading>
        <HowIWork />
      </SkillsContainer>
    </Margin>
  </section>
);

export default About;
