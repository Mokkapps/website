import React from 'react';

import HeroCharacteristic from './HeroCharacteristic';
import config from '../../content/meta/config';

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  >
    {config.characteristics.map(characteristic => {
      const { emoji, ariaLabel, text } = characteristic;
      return (
        <HeroCharacteristic emoji={emoji} ariaLabel={ariaLabel} text={text} />
      );
    })}
  </div>
);
