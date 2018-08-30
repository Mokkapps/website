import React from 'react';
import SkillBar from 'react-skillbars';

const skills = [
  { type: 'JavaScript', level: 90 },
  { type: 'TypeScript', level: 75 },
  { type: 'Java', level: 50 },
  { type: 'CSS', level: 70 },
  { type: 'HTML', level: 80 }
];
const skillColors = {
  bar: '#fc1a20',
  title: {
    text: 'white',
    background: '#c41319',
  },
};

export default () => <SkillBar colors={skillColors} skills={skills} />;
