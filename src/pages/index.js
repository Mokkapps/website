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
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Button from '../components/Button';
import {
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

const Projects = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const IndexPage = props => {
  const {
    data: { projectAssets, latestPosts, seoImage },
  } = props;

  const posts = latestPosts.edges.map(edge => edge.node);

  const { siteTitlePostfix, siteUrl, siteDescription } = config;

  return (
    <Layout>
      <Article className="flex flex-col min-h-screen">
        <div className="flex flex-col flex-grow items-center">
          <h1 className="text-center mb-10 lg:mb-20" data-cy="home-heading">
            <FormattedMessage id="homeTitle" />
          </h1>
          <div className="grid w-full grid-cols-1 grid-rows-1 md:grid-cols-2 md:gap-x-5">
            <div className="w-full">
              <h2 className="text-center lg:text-left">
                <FormattedMessage id="homeDoYouNeed" />
              </h2>
              <UnorderedList>
                <ListElement className="my-8">
                  <FormattedMessage id="homeSkill1" />
                </ListElement>
                <ListElement className="my-8">
                  <FormattedMessage
                    id="homeSkill2"
                    values={{
                      years: yearsOfExperience,
                    }}
                  />
                </ListElement>
                <ListElement className="my-8">
                  <FormattedMessage id="homeSkill3" />
                </ListElement>
                <ListElement className="my-8">
                  <FormattedMessage id="homeSkill4" />
                </ListElement>
                <ListElement className="my-8">
                  <FormattedMessage id="homeSkill5" />
                </ListElement>
              </UnorderedList>
            </div>
            <div className="w-full m-auto">
              <StaticImage
                alt={config.baseName}
                title="Michael Hoffmann"
                placeholder="blurred"
                layout="constrained"
                aspectRatio={1}
                height={500}
                className="rounded-lg shadow-md"
                src="../images/contact.jpg"
              />
            </div>
          </div>
          <p className="text-center my-10 text-xl">
            <FormattedMessage id="homeMyName" />{' '}
            <strong>
              <Link to="/about">Michael Hoffmann</Link>
            </strong>{' '}
            <FormattedMessage id="homeRightPlace" />
          </p>
          <TestimonialSlider className="mb-10" />
          <Availability />
          <div className="flex flex-wrap justify-center">
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
              <FormattedMessage id="homeHireMe" />
            </Button>
            <ScheduleMeetingButton
              dataCy="home-schedule-meeting-button"
              className="w-full md:w-72 h-16 mb-2 uppercase mx-2"
            />
          </div>
        </div>
        <h2 className="text-center mt-10 mb-4">
          <FormattedMessage id="latestBlogPosts" />
        </h2>
        <div className="flex flex-wrap justify-center">
          {posts.map(post => {
            const {
              frontmatter: { title, cover },
              fields: { slug },
            } = post;
            return (
              <BlogPostCard
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
          i18nId="moreBlogPostsLink"
        />
        <h2 className="text-center mt-10 mb-4">
          <FormattedMessage id="featuredProjects" />
        </h2>
        <Projects data-cy="hero-projects-section">
          {config.projects
            .filter(p => p.featured)
            .map(project => {
              const { imageName, title, description, urls } = project;
              return (
                <ProjectCard
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
        </Projects>
        <LinkButton
          className="mb-10"
          dataCy="hero-projects-more-button"
          href="/projects"
          i18nId="moreProjectsLink"
        />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Home${siteTitlePostfix}`}
        description={siteDescription}
        image={getSrc(seoImage)}
      />
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
            gatsbyImageData(
              width: 600
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
    latestPosts: allMdx(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
      limit: 3
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
                gatsbyImageData(
                  width: 350
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;
