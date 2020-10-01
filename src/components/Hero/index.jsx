import PropTypes from 'prop-types';
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

import HeroCharacteristic from './HeroCharacteristics';
import LinkButton from '../LinkButton';
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Hero = ({ projectAssets, latestPosts, sliderImage }) => {
  return (
    <Container>
      <Heading data-cy="hero-heading">
        <FormattedMessage id="hi" /> <a href="about">Michael Hoffmann..</a>
      </Heading>
      <Margin top={3} bottom={3}>
        <Quote data-cy="hero-quote">
          <FormattedMessage id="shortSummary" />
        </Quote>
      </Margin>
      {sliderImage ? (
        <Image
          alt="Michael Hoffmann Image"
          title="Michael Hoffmann.."
          fluid={sliderImage.childImageSharp.fluid}
        />
      ) : null}
      <Margin top={3} bottom={3}>
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
        <LinkButton
          dataCy="hero-characteristics-more-button"
          href="/about"
          i18nId="moreAboutMeLink"
        />
      </Margin>
      <SectionHeading>
        <FormattedMessage id="featuredProjects" />
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
      <LinkButton
        dataCy="hero-projects-more-button"
        href="/projects"
        i18nId="moreProjectsLink"
      />
      <Margin top={4}>
        <SectionHeading>
          <FormattedMessage id="latestBlogPosts" />
        </SectionHeading>
      </Margin>
      {latestPosts.map((post, index) => {
        const {
          frontmatter: { title, categories, cover },
          fields: { slug, prefix },
          excerpt,
        } = post;
        return (
          <BlogPost
            id={index}
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
        );
      })}
      <LinkButton
        dataCy="hero-blog-more-button"
        href="/blog"
        i18nId="moreBlogPostsLink"
      />
    </Container>
  );
};

Hero.propTypes = {
  latestPosts: PropTypes.array.isRequired,
  projectAssets: PropTypes.object.isRequired,
  sliderImage: PropTypes.any.isRequired,
};

export default Hero;
