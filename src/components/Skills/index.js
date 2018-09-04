import React from 'react';

import config from '../../content/meta/config';
import DevIcon from '../DevIcon';

import './Skills.scss';

const getDevIcons = skills =>
  skills.map(skill => (
    <div title={skill.type} className="skills__icon" key={skill.icon}>
      <DevIcon
        key={skill.icon}
        className="skills__icon"
        iconName={skill.icon}
        width="64px"
        height="64px"
      />
    </div>
  ));

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const getSkillSection = (skillLevel, skills) =>
  skills.length > 0
    ? [
        <h3 key={skillLevel} className="skills__text">
          {capitalizeFirstLetter(skillLevel)}
        </h3>,
        <div key={Math.random()} className="skills__icons-container">
          {getDevIcons(skills)}
        </div>,
      ]
    : null;

const SKILLS = ['expert', 'advanced', 'intermediate', 'elementary'];

export default () => {
  return (
    <div className="skills__container">
      {SKILLS.map(skill =>
        getSkillSection(skill, config.skills.filter(s => s.level === skill))
      )}
    </div>
  );
};
