import React from 'react';

import './About.scss';

import Skills from '../Skills';
import Timeline from '../Timeline';
import AboutMe from './AboutMe';

const About = ({ aboutImage }) => (
  <section>
    <AboutMe aboutImage={aboutImage} />
    <div className="about__skills">
      <h1 className="about__skills-heading">Skills</h1>
      <Skills />
    </div>
    <div className="about__skills">
      <h1 className="about__skills-heading">Timeline</h1>
      <Timeline />
    </div>
  </section>
);

export default About;
