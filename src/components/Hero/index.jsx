import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import BlogIcon from 'react-feather/dist/icons/file-text';
import BeeIcon from 'react-feather/dist/icons/info';
import GamingIcon from 'react-feather/dist/icons/monitor';
import CodeIcon from 'react-feather/dist/icons/code';

import HeroCharacteristic from './HeroCharacteristic';
import BlogPost from '../BlogPost';
import config from '../../content/meta/config';
import { getAsset, metaIcons } from '../../utils/helper';
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

  ${customMedia.lessThan('sm')`
     font-size: 1.4em;
  `};

  ${customMedia.lessThan('md')`
     font-size: 2em;
  `};
`;

const Quote = styled.h3`
  margin: 0 auto;
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
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  grid-template-areas:
    'skill skill'
    'skill skill';
`;

const SectionHeading = styled.h2`
  text-align: center;
`;

const Projects = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MorePostsLink = styled.div`
  display: flex;
  justify-content: center;
`;

const Hero = ({ projectAssets, latestPost }) => {
  const {
    frontmatter: { title, categories, cover },
    fields: { slug, prefix },
    excerpt,
  } = latestPost;
  return (
    <Container>
      <Heading>
        Hi! I'm <a href="about">Michael Hoffmann</a>
      </Heading>
      <Margin top={4}>
        <Quote>{config.quote}</Quote>
      </Margin>
      <Margin top={4} bottom={4}>
        <Characteristics>
          {config.characteristics.map(characteristic => {
            const { text, description, icon } = characteristic;
            return (
              <HeroCharacteristic
                key={text}
                icon={images[icon]}
                text={text}
                description={description}
              />
            );
          })}
        </Characteristics>
      </Margin>
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
      <Margin top={4}>
        <SectionHeading>LATEST BLOG POST</SectionHeading>
      </Margin>
      <BlogPost
        key={slug}
        title={title}
        slug={slug}
        cover={cover}
        categories={categories}
        prefix={prefix}
        author="Michael Hoffmann"
        metaIcons={metaIcons}
        excerpt={excerpt}
      />
      <MorePostsLink>
        <a href="/blog">Read more blog posts →</a>
      </MorePostsLink>
    </Container>
  );
};

export default Hero;
