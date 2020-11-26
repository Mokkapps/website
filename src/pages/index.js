import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import config from '../content/meta/config';

import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { navigate } from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import {
  getAsset,
  sendCustomAnalyticsEvent,
  yearsOfExperience,
} from '../utils/helper';
import LinkButton from '../components/LinkButton';
import ProjectCard from '../components/ProjectCard';
import BlogPostCard from '../components/BlogPostCard';
import { apiUrl, useFetch } from "../hooks/useFetch";
import Availability from "../components/Availability";

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

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
    data: { projectAssets, latestPosts, file },
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
          <div className="flex flex-col md:flex-row">
            <div className="w-full mr-10">
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
            <Image
              alt="Michael Hoffmann Image"
              title="Michael Hoffmann"
              fluid={file.childImageSharp.fluid}
            />
          </div>
          <p className="text-center my-10 text-xl">
            <FormattedMessage id="homeMyName" />{' '}
            <strong>
              <Link to="/about">Michael Hoffmann</Link>
            </strong>{' '}
            <FormattedMessage id="homeRightPlace" />
          </p>
          <div className="flex flex-wrap justify-center">
            <Button
              dataCy="home-hire-me-button"
              className="w-64 h-16 mb-2 uppercase"
              onClick={() => {
                sendCustomAnalyticsEvent('Hire me button clicked');
                navigate('/contact');
              }}
            >
              <FormattedMessage id="homeHireMe" />
            </Button>
          </div>
          <Availability/>
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
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900, maxHeight: 1900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    projectAssets: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
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
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
