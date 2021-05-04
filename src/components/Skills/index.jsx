import React from 'react';
import { FormattedMessage } from 'react-intl';

import config from '../../content/meta/config';

const SKILLS = ['expert', 'advanced', 'intermediate', 'elementary'];

const getDevIcons = skills =>
  skills.map(skill => (
    <div className="p-4" title={skill.type} key={skill.className}>
      <i className={`${skill.className} text-5xl`} />
    </div>
  ));

const getSkillSection = (skillLevel, skills) =>
  skills.length > 0
    ? [
        <h3
          className="bg-secondary flex justify-center items-center text-center h-full rounded-md shadow-md min-h-50px"
          key={skillLevel}
        >
          <FormattedMessage id={skillLevel} />
        </h3>,
        <div
          className="flex flex-wrap justify-center bg-secondary rounded-md shadow-md"
          key={Math.random()}
        >
          {getDevIcons(skills)}
        </div>,
      ]
    : null;

const Skills = () => (
  <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
    {SKILLS.map(skill =>
      getSkillSection(
        skill,
        config.skills.filter(s => s.level === skill)
      )
    )}
  </div>
);

export default Skills;
