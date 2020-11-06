import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
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
`;

const Quote = styled.h2`
  margin: 0 auto;
  text-align: center;
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
  @apply my-8;
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
        <FormattedMessage id="hi" /> <Link to="/about">Michael Hoffmann</Link>
      </Heading>
      <Quote className="my-8" data-cy="hero-quote">
        <FormattedMessage id="shortSummary" />
      </Quote>
      {sliderImage ? (
        <Image
          alt="Michael Hoffmann Image"
          title="Michael Hoffmann"
          fluid={sliderImage.childImageSharp.fluid}
        />
      ) : null}
      <LinkButton
        className="mt-5"
        dataCy="hero-characteristics-contact-button"
        href="/contact"
        i18nId="contactLink"
      />
      <Characteristics className="my-8" data-cy="hero-characteristics-section">
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
      <LinkButton
        className="mb-10"
        dataCy="hero-characteristics-more-button"
        href="/about"
        i18nId="moreAboutMeLink"
      />
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
        className="mb-10"
        dataCy="hero-projects-more-button"
        href="/projects"
        i18nId="moreProjectsLink"
      />
      <SectionHeading>
        <FormattedMessage id="latestBlogPosts" />
      </SectionHeading>
      {latestPosts.map((post, index) => {
        const {
          frontmatter: { title, categories, cover },
          fields: { slug, prefix },
          excerpt,
        } = post;
        return (
          <BlogPost
            className="mt-4"
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
        className="mb-10"
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
