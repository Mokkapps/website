import React from 'react';

import HeroCharacteristic from './HeroCharacteristic';

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}
  >
    <HeroCharacteristic
      emoji="💻"
      ariaLabel="pc"
      text="MOBILE, GAME & FRONTEND DEVELOPER"
    />
    <HeroCharacteristic emoji="📝" ariaLabel="memo" text="BLOGGER" />
    <HeroCharacteristic
      emoji="🎮"
      ariaLabel="games"
      text="VIDEOGAME ENTHUSIAST"
    />
    <HeroCharacteristic emoji="🐝" ariaLabel="bee" text="BEEKEEPER" />
  </div>
);
