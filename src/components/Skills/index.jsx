import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import config from '../../content/meta/config';

const DevIconContainer = styled.div`
  margin: auto 0.5rem;
  padding: 0.25rem;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--secondary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  padding: 0.5rem;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-template-areas:
    'text icons'
    'text icons'
    'text icons'
    'text icons';
  grid-gap: 10px;
`;

const DevIcon = styled.i`
  font-size: 50px;
`;

const SkillHeading = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  height: 100%;
  text-align: center;
  background-color: var(--secondary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
`;

const getDevIcons = skills =>
  skills.map(skill => (
    <DevIconContainer title={skill.type} key={skill.className}>
      <DevIcon className={skill.className}/>
    </DevIconContainer>
  ));

const getSkillSection = (skillLevel, skills) =>
  skills.length > 0
    ? [
        <SkillHeading key={skillLevel}>
          <FormattedMessage id={skillLevel} />
        </SkillHeading>,
        <IconsContainer key={Math.random()}>
          {getDevIcons(skills)}
        </IconsContainer>,
      ]
    : null;

const SKILLS = ['expert', 'advanced', 'intermediate', 'elementary'];

const Skills = () => (
  <SkillsContainer>
    {SKILLS.map(skill =>
      getSkillSection(skill, config.skills.filter(s => s.level === skill))
    )}
  </SkillsContainer>
);

export default Skills;
