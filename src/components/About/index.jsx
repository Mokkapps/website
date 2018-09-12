import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import Skills from '../Skills';
import Timeline from '../Timeline';
import AboutMe from './AboutMe';

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
      <SkillsContainer>
        <Heading>SKILLS</Heading>
        <Skills />
      </SkillsContainer>
    </Margin>
    <SkillsContainer>
      <Heading>EXPERIENCE & EDUCATION</Heading>
      <Timeline />
    </SkillsContainer>
  </section>
);

export default About;
