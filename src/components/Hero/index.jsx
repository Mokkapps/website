import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import BlogIcon from 'react-feather/dist/icons/file-text';
import SearchIcon from 'react-feather/dist/icons/search';
import ZapIcon from 'react-feather/dist/icons/zap';
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
  zap: ZapIcon,
  info: BeeIcon,
  monitor: GamingIcon,
  code: CodeIcon,
  search: SearchIcon,
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

const MoreLink = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled(Img)`
  border-radius: 5px;
`;

const Hero = ({ projectAssets, latestPost, sliderImage }) => {
  const {
    frontmatter: { title, categories, cover },
    fields: { slug, prefix },
    excerpt,
  } = latestPost;
  return (
    <Container>
      <Heading data-cy="hero-heading">
        <FormattedMessage id="hi" /> <a href="about">Michael Hoffmann</a>
      </Heading>
      <Margin top={3} bottom={3}>
        <Quote data-cy="hero-quote">
          <FormattedMessage id="shortSummary" />
        </Quote>
      </Margin>
      {sliderImage ? (
        <Image
          alt="Michael Hoffmann Image"
          title="Michael Hoffmann"
          sizes={sliderImage.childImageSharp.sizes}
        />
      ) : null}
      <Margin top={4} bottom={3}>
        <Characteristics data-cy="hero-characteristics-section">
          {config.characteristics.map(characteristic => {
            const { i18nTitleId, i18nDescId, icon } = characteristic;
            return (
              <HeroCharacteristic
                key={i18nTitleId}
                icon={images[icon]}
                text={i18nTitleId}
                description={i18nDescId}
              />
            );
          })}
        </Characteristics>
      </Margin>
      <Margin bottom={4}>
        <MoreLink data-cy="hero-characteristics-more-button">
          <a href="/about">
            <FormattedMessage id="moreAboutMeLink"/>
          </a>
        </MoreLink>
      </Margin>
      <SectionHeading>
        <FormattedMessage id="featuredProjects"/>
      </SectionHeading>
      <Projects data-cy="hero-projects-section">
        {config.projects
          .filter(p => p.featured)
          .map(project => {
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
      <MoreLink data-cy="hero-projects-more-button">
        <a href="/projects"><FormattedMessage id="moreProjectsLink"/></a>
      </MoreLink>
      <Margin top={4}>
        <SectionHeading><FormattedMessage id="latestBlogPost"/></SectionHeading>
      </Margin>
      <BlogPost
        id={0}
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
      <MoreLink data-cy="hero-blog-more-button">
        <a href="/blog"><FormattedMessage id="moreBlogPostsLink"/></a>
      </MoreLink>
    </Container>
  );
};

export default Hero;
