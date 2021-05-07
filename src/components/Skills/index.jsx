import React from 'react';
import { FormattedMessage } from 'react-intl';

import DevIcon from '../DevIcon';

const skills = [
  { type: 'javaScript', level: 'expert' },
  { type: 'cSharp', level: 'elementary' },
  { type: 'dotNet', level: 'elementary' },
  { type: 'typeScript', level: 'advanced' },
  { type: 'java', level: 'intermediate' },
  { type: 'css', level: 'advanced' },
  { type: 'html', level: 'advanced' },
  { type: 'angular', level: 'advanced' },
  { type: 'react', level: 'advanced' },
  { type: 'vue', level: 'intermediate' },
  { type: 'node', level: 'intermediate' },
];

const skillLevels = ['expert', 'advanced', 'intermediate', 'elementary'];

const getDevIcons = skills =>
  skills.map(skill => (
    <DevIcon
      size="5xl"
      technology={skill.type}
      className="p-4"
      key={skill.type}
    />
  ));

const getSkillSection = (skillLevel, skills) =>
  skills.length > 0
    ? [
        <h3
          className="bg-secondary flex justify-center items-center text-center h-full rounded-md shadow-md min-h-50px"
          key={skillLevel}
        >
          <FormattedMessage id={`aboutPage.${skillLevel}`} />
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
    {skillLevels.map(skill =>
      getSkillSection(
        skill,
        skills.filter(s => s.level === skill)
      )
    )}
  </div>
);

export default Skills;
