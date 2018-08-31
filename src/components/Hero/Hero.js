import React from 'react';

import './Hero.scss';
import SocialLink from '../SocialLink/SocialLink';
import HeroHeading from './HeroHeading';
import HeroCharacteristicList from './HeroCharacteristicList';

export default () => (
  <div className="container">
    <HeroHeading />

    <div className="centered">
      <HeroCharacteristicList />
    </div>

    <div className="centered">
      <SocialLink href="https://github.com/mokkapps" iconName="github" />
      <SocialLink href="https://twitter.com/mokkapps" iconName="twitter" />
      <SocialLink href="https://dev.to/mokkapps" iconName="dev-dot-to" />
      <SocialLink
        href="https://www.linkedin.com/in/michael-hoffmann-3b8933b1"
        iconName="linkedin"
      />
    </div>
  </div>
);
