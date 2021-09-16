import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { getSrc, StaticImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

import config from '../content/meta/config';

import styled from 'styled-components';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Button from '../components/Button';
import {
  baseFormattedMessageValues,
  getAsset,
  sendCustomAnalyticsEvent,
  yearsOfExperience,
} from '../utils/helper';
import LinkButton from '../components/LinkButton';
import ProjectCard from '../components/ProjectCard';
import BlogPostCard from '../components/BlogPostCard';
import Availability from '../components/Availability';
import ScheduleMeetingButton from '../components/ScheduleMeetingButton';
import TestimonialSlider from '../components/TestimonialSlider';
import BusinessProjectList from '../components/BusinessProjectsList';
import DevIcon from '../components/DevIcon';

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListElement = styled.li`
  padding-left: -1rem;
  text-indent: -0.7rem;

  &::before {
    content: '✅';
    margin-right: 0.5rem;
  }
`;

const IndexPage = props => {
  const {
    data: { projectAssets, latestPosts, seoImage },
  } = props;

  const posts = latestPosts.edges.map(edge => edge.node);

  const {
    siteTitlePostfix,
    siteUrl,
    siteDescription,
    baseTitle,
    baseTechFocus,
  } = config;

  const skills = (
    <div className="flex flex-col">
      <div className="w-full">
        <h2 className="text-center lg:text-left">
          <FormattedMessage id="landingPage.doYouNeed" />
        </h2>
        <UnorderedList>
          <ListElement className="my-8">
            <FormattedMessage
              id="landingPage.skills.experience"
              values={{
                ...baseFormattedMessageValues,
                years: yearsOfExperience,
                tech: baseTechFocus,
              }}
            />
          </ListElement>
          <ListElement className="my-8">
            <FormattedMessage
              id="landingPage.skills.development"
              values={{
                ...baseFormattedMessageValues,
              }}
            />
          </ListElement>
          <ListElement className="my-8">
            <FormattedMessage
              id="landingPage.skills.tShaped"
              values={{
                ...baseFormattedMessageValues,
              }}
            />
          </ListElement>
          <ListElement className="my-8">
            <FormattedMessage
              id="landingPage.skills.codeQuality"
              values={{
                ...baseFormattedMessageValues,
              }}
            />
          </ListElement>
          <ListElement className="my-8">
            <FormattedMessage
              id="landingPage.skills.partner"
              values={{
                ...baseFormattedMessageValues,
              }}
            />
          </ListElement>
        </UnorderedList>
      </div>
      <div className="flex justify-center">
        <StaticImage
          alt={config.baseNameWithTitle}
          title="Michael Hoffmann"
          placeholder="blurred"
          height={500}
          className="rounded-lg shadow-md"
          src="../images/contact.jpg"
        />
      </div>
    </div>
  );

  const hireMeButton = (
    <Button
      dataCy="home-hire-me-button"
      className="w-full md:w-72 h-16 mb-2 uppercase mx-2"
      onClick={() => {
        sendCustomAnalyticsEvent('Hire me button clicked');
        navigate('/contact');
      }}
    >
      <span className="mr-2" role="img" aria-label="phone">
        💻
      </span>
      <FormattedMessage id="landingPage.hireMe" />
    </Button>
  );

  const latestBlogPosts = (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-center mt-10 mb-4 uppercase">
        <FormattedMessage id="landingPage.latestBlogPosts" />
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.map(post => {
          const {
            frontmatter: { title, cover },
            fields: { slug },
          } = post;
          return (
            <BlogPostCard
              block
              id="blog-post"
              key={slug}
              asset={cover}
              title={title}
              url={`/blog${slug}`}
            />
          );
        })}
      </div>

      <LinkButton
        className="mb-10"
        dataCy="hero-blog-more-button"
        href="/blog"
        i18nId="general.moreBlogPostsLink"
      />
    </section>
  );

  const featuredPrivateProjects = (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-center mt-10 mb-4 uppercase">
        <FormattedMessage id="landingPage.featuredPrivateProjects" />
      </h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        data-cy="hero-private-projects-section"
      >
        {config.projects
          .filter(p => p.featured)
          .map(project => {
            const { imageName, title, description, urls } = project;
            return (
              <ProjectCard
                block
                data-cy="home-project-card"
                key={title}
                minimal={true}
                asset={getAsset(projectAssets.edges, imageName)}
                title={title}
                description={description.short}
                urls={urls}
              />
            );
          })}
      </div>
      <LinkButton
        className="mb-5"
        dataCy="hero-private-projects-more-button"
        href="/projects"
        i18nId="general.moreProjectsLink"
      />
    </section>
  );

  const techIcon = (
    <DevIcon
      hideBackground
      colored
      size="text-7xl"
      technology={config.base.techFocusDevIconName}
    />
  );

  const introduction = (
    <div className="flex flex-col flex-grow items-center">
      {techIcon}
      <h1 className="text-center my-10" data-cy="home-heading">
        <FormattedMessage
          id="landingPage.title"
          values={{ title: baseTitle, tech: baseTechFocus }}
        />
      </h1>
      {skills}
      <p className="text-center mt-5 text-xl">
        <FormattedMessage id="landingPage.myName" />{' '}
        <strong>
          <Link to="/about">Michael Hoffmann</Link>
        </strong>{' '}
        <FormattedMessage id="landingPage.rightPlace" />
      </p>
      <Availability className="mt-10 mb-5" />
      <div className="flex flex-wrap justify-center">
        {hireMeButton}
        <ScheduleMeetingButton
          dataCy="home-schedule-meeting-button"
          className="w-full md:w-72 h-16 mb-2 uppercase mx-2"
        />
      </div>
      <TestimonialSlider className="my-10" dataCy="home-testimonial-slider" />
    </div>
  );

  const businessProjects = (
    <section>
      <h2 className="text-center mt-10 mb-4 uppercase">
        <FormattedMessage id="landingPage.businessProjectHighlights" />
      </h2>
      <BusinessProjectList dataCy="hero-business-project-list" />
      <LinkButton
        className="mb-5"
        dataCy="hero-business-projects-more-button"
        href="/projects"
        i18nId="general.moreProjectsLink"
      />
    </section>
  );

  return (
    <Layout
      seo={{
        url: siteUrl,
        title: `Home${siteTitlePostfix}`,
        description: siteDescription,
        image: `${config.siteUrl}${getSrc(seoImage)}`,
      }}
    >
      <Article className="flex flex-col min-h-screen">
        {introduction}
        {businessProjects}
        {latestBlogPosts}
        {featuredPrivateProjects}
      </Article>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-home.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    projectAssets: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
    latestPosts: allMdx(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
      }
    }
  }
`;
