import React from 'react';
import TextLoop from 'react-text-loop';

import './Hero.scss';

import HeroLoopableText from './HeroLoopableText';

export default () => (
  <h2 className="hero__heading">
    Hi! I'm{' '}
    <TextLoop
      style={{ cursor: 'pointer' }}
      mask
      springConfig={{ stiffness: 180, damping: 8 }}
    >
      <HeroLoopableText>Michael Hoffmann</HeroLoopableText>
      <HeroLoopableText>Mokkapps</HeroLoopableText>
    </TextLoop>
  </h2>
);
