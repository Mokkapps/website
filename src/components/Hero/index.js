import React from 'react';

import BlogIcon from 'react-feather/dist/icons/file-text';
import BeeIcon from 'react-feather/dist/icons/info';
import GamingIcon from 'react-feather/dist/icons/monitor';
import CodeIcon from 'react-feather/dist/icons/code';

import './Hero.scss';
import HeroCharacteristic from './HeroCharacteristic';

import config from '../../content/meta/config';
import { getAsset } from '../../utils/helper';
import ProjectCard from '../ProjectCard';

const images = {
  'file-text': BlogIcon,
  info: BeeIcon,
  monitor: GamingIcon,
  code: CodeIcon,
};

const Hero = ({ projectAssets }) => (
  <div className="hero__container">
    <h1 className="hero__heading">
      Hi! I'm <a href="about">Michael Hoffmann</a>
    </h1>

    <h3 className="hero__quote">{config.quote}</h3>

    <div className="hero__characteristics-container">
      {config.characteristics.map(characteristic => {
        const { text, icon } = characteristic;
        return <HeroCharacteristic icon={images[icon]} text={text}/>;
      })}
    </div>

    <h1 className="hero__section-heading">FEATURED PROJECTS</h1>
    <section className="hero__projects">
      {config.projects.filter(p => p.featured).map(project => {
        const { imageName, title, description, urls } = project;
        return (
          <ProjectCard
            key={title}
            minimal={true}
            asset={getAsset(projectAssets.edges, imageName)}
            title={title}
            description={description.short}
            urls={urls}
          />
        );
      })}
    </section>
  </div>
);

export default Hero;
