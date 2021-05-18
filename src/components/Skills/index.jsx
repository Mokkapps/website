import React from 'react';
import { FormattedMessage } from 'react-intl';

import DevIcon from '../DevIcon';

const skillsList = [
  { type: 'javaScript', level: 'expert' },
  { type: 'git', level: 'expert' },
  { type: 'typeScript', level: 'advanced' },
  { type: 'css', level: 'advanced' },
  { type: 'html', level: 'advanced' },
  { type: 'angular', level: 'advanced' },
  { type: 'react', level: 'advanced' },
  { type: 'android', level: 'advanced' },
  { type: 'apple', level: 'advanced' },
  { type: 'java', level: 'intermediate' },
  { type: 'vue', level: 'intermediate' },
  { type: 'node', level: 'intermediate' },
  { type: 'graphQL', level: 'intermediate' },
  { type: 'docker', level: 'intermediate' },
  { type: 'cSharp', level: 'elementary' },
  { type: 'dotNet', level: 'elementary' },
  { type: 'aws', level: 'elementary' },
  { type: 'python', level: 'elementary' },
];

const skillLevels = ['expert', 'advanced', 'intermediate', 'elementary'];

const getDevIcons = skills =>
  skills.map(skill => (
    <DevIcon
      className="mr-2"
      size="2xl"
      technology={skill.type}
      key={skill.type}
    />
  ));

const getSkillSection = (skillLevel, skills) =>
  skills.length > 0
    ? [
        <p
          className="bold text-lg bg-secondary flex justify-center items-center text-center h-full rounded-md shadow-md min-h-50px"
          key={skillLevel}
        >
          <FormattedMessage id={`aboutPage.${skillLevel}`} />
        </p>,
        <div
          className="flex flex-wrap justify-center items-center bg-secondary rounded-md shadow-md p-3"
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
        skillsList.filter(s => s.level === skill)
      )
    )}
  </div>
);

export default Skills;
