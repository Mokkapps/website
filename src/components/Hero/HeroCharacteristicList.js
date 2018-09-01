import React from 'react';

import './Hero.scss';

import HeroCharacteristic from './HeroCharacteristic';
import config from '../../content/meta/config';

export default () => (
  <ul className="hero__characteristics">
    {config.characteristics.map(characteristic => {
      const { emoji, ariaLabel, text } = characteristic;
      return (
        <HeroCharacteristic emoji={emoji} ariaLabel={ariaLabel} text={text} />
      );
    })}
  </ul>
);
