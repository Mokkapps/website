import React from 'react';

import './About.css';

import SkillBar from '../SkillBar';
import AboutMe from './AboutMe';

export default () => (
  <section>
    <AboutMe />
    <div className="skills-container">
      <h1 style={{ marginBottom: '2rem' }}>Skills</h1>
      <SkillBar />
    </div>
  </section>
);
