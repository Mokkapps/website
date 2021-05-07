import React from 'react';
import { FormattedMessage } from 'react-intl';

const skills = [
  // className can be found in https://konpa.github.io/devicon/
  {
    type: 'JavaScript',
    className: 'devicon-javascript-plain colored',
    level: 'expert',
  },
  {
    type: 'C#',
    className: 'devicon-csharp-line colored',
    level: 'elementary',
  },
  {
    type: '.NET',
    className: 'devicon-dot-net-plain-wordmark colored',
    level: 'elementary',
  },
  {
    type: 'TypeScript',
    className: 'devicon-typescript-plain colored',
    level: 'expert',
  },
  {
    type: 'Java',
    className: 'devicon-java-plain-wordmark colored',
    level: 'advanced',
  },
  {
    type: 'CSS3',
    className: 'devicon-css3-plain-wordmark colored',
    level: 'expert',
  },
  {
    type: 'HTML5',
    className: 'devicon-html5-plain-wordmark colored',
    level: 'expert',
  },
  {
    type: 'Angular',
    className: 'devicon-angularjs-plain colored',
    level: 'expert',
  },
  {
    type: 'React',
    className: 'devicon-react-original-wordmark colored',
    level: 'expert',
  },
  {
    type: 'Vue',
    className: 'devicon-vuejs-plain-wordmark colored',
    level: 'advanced',
  },
  {
    type: 'Node.js',
    className: 'devicon-nodejs-plain-wordmark colored',
    level: 'intermediate',
  },
];

const skillLevels = ['expert', 'advanced', 'intermediate', 'elementary'];

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
