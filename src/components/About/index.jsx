import React from 'react';
import styled from 'styled-components';

import Skills from '../Skills';
import Timeline from '../Timeline';
import AboutMe from './AboutMe';

const SkillsContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2em;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 1.5em 0 1.5em 0;
  word-wrap: normal; 
`;

const About = ({ aboutImage }) => (
  <section>
    <AboutMe aboutImage={aboutImage} />
    <SkillsContainer>
      <Heading>SKILLS</Heading>
      <Skills />
    </SkillsContainer>
    <SkillsContainer>
      <Heading>EXPERIENCE & EDUCATION</Heading>
      <Timeline />
    </SkillsContainer>
  </section>
);

export default About;
