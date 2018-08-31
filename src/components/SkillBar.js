import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import config from '../content/meta/config';
import './SkillBar.scss';

export default () =>
  config.skills.map(skill => (
    <div>
      <h3>{skill.type}</h3>
      <Progress
        style={{ marginBottom: '1rem' }}
        status="skill"
        theme={{
          skill: {
            color: '#FC1A20',
          },
        }}
        percent={skill.level}
      />
    </div>
  ));
