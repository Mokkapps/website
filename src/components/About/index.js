import React from 'react';

import './About.scss';

import SkillBar from '../SkillBar';
import AboutMe from './AboutMe';

const About = ({aboutImage}) => (
  <section>
    <AboutMe aboutImage={aboutImage} />
    <div className="about--skills">
      <h1 style={{ marginBottom: '.5em' }}>Skills</h1>
      <SkillBar />
    </div>
  </section>
);

export default About;
