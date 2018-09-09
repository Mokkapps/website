import React from 'react';
import styled from 'styled-components';

import BlogIcon from 'react-feather/dist/icons/file-text';
import BeeIcon from 'react-feather/dist/icons/info';
import GamingIcon from 'react-feather/dist/icons/monitor';
import CodeIcon from 'react-feather/dist/icons/code';

import HeroCharacteristic from './HeroCharacteristic';
import config from '../../content/meta/config';
import { getAsset } from '../../utils/helper';
import ProjectCard from '../ProjectCard';
import { customMedia } from '../../utils/style-utils';

const images = {
  'file-text': BlogIcon,
  info: BeeIcon,
  monitor: GamingIcon,
  code: CodeIcon,
};

const Container = styled.div`
  height: 100%;
  border-radius: 10px;
  padding: 2rem;
  background: white;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-bottom: 2rem;

  ${customMedia.lessThan('sm')`
     font-size: 1.4em;
  `};

  ${customMedia.lessThan('md')`
     font-size: 2em;
  `};
`;

const Quote = styled.h3`
  margin: auto;
  font-size: 2em;
  text-align: center;
  width: 80%;

  ${customMedia.lessThan('sm')`
    font-size: 0.8em;
  `};

  ${customMedia.lessThan('md')`
     font-size: 1.2em;
  `};
`;

const Characteristics = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin: 1.5rem 0 1.5rem 0;
`;

const Projects = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Hero = ({ projectAssets }) => (
  <Container>
    <Heading>
      Hi! I'm <a href="about">Michael Hoffmann</a>
    </Heading>
    <Quote>{config.quote}</Quote>
    <Characteristics>
      {config.characteristics.map(characteristic => {
        const { text, icon } = characteristic;
        return (
          <HeroCharacteristic key={text} icon={images[icon]} text={text} />
        );
      })}
    </Characteristics>
    <SectionHeading>FEATURED PROJECTS</SectionHeading>
    <Projects>
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
    </Projects>
  </Container>
);

export default Hero;
