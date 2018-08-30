import React from 'react';

import './Hero.css';
import SkillBar from '../SkillBar';

export default () => (
  <div className="main-container">
    <div className="welcome-container">
      <h1 className="heading">
        Hi! I'm <strong className="red">Michael Hoffmann</strong>
      </h1>

      <h className="subheading">
        I publish my private software projects under the pseudonym{' '}
        <strong>Mokkapps</strong>
      </h>

      <h2>
        MOBILE, GAME & FRONTEND DEVELOPER <strong className="red">|</strong>{' '}
        BLOGGER <strong className="red">|</strong> VIDEOGAME ENTHUSIAST{' '}
        <strong className="red">|</strong> BEEKEEPER
      </h2>

      <div className="social-container">
        <a href="https://github.com/mokkapps" className="social-link">
          <img
            height="64"
            width="64"
            src="https://unpkg.com/simple-icons@latest/icons/github.svg"
          />
        </a>
        <a href="https://twitter.com/mokkapps" className="social-link">
          <img
            height="64"
            width="64"
            src="https://unpkg.com/simple-icons@latest/icons/twitter.svg"
          />
        </a>
        <a href="https://dev.to/mokkapps" className="social-link">
          <img
            height="64"
            width="64"
            src="https://unpkg.com/simple-icons@latest/icons/dev-dot-to.svg"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-hoffmann-3b8933b1"
          className="social-link"
        >
          <img
            height="64"
            width="64"
            src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
          />
        </a>
      </div>
    </div>
    <div className="skill-container">
      <h1 className="heading">My Skills</h1>
      <SkillBar />
    </div>
  </div>
);
