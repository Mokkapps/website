import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { FaLaptopCode } from 'react-icons/fa';

import config from 'content/meta/config';
import {
  baseFormattedMessageValues,
  generateVueTipImageUrl,
  sendCustomAnalyticsEvent,
  yearsOfExperience,
} from 'utils';
import Layout from 'components/Layout';
import Article from 'components/Article';
import Button from 'components/Button';
import LinkButton from 'components/LinkButton';
import BusinessProjectList from 'components/BusinessProjectsList';
import DevIcon from 'components/DevIcon';
import References from 'components/References';
import LinkCard from 'components/LinkCard';

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
    data: { projectAssets, latestPosts, latestTips: latestTipsData },
  } = props;

  const seoImageUrl =
    'https://res.cloudinary.com/mokkapps/image/upload/v1640673374/open_graph_home.jpg';

  const posts = latestPosts.edges.map(edge => edge.node);
  const tips = latestTipsData.edges.map(edge => edge.node);

  const { siteTitlePostfix, siteUrl, descriptionEn, baseTitle, baseTechFocus } =
    config;

  const skills = (
    <div className="flex flex-col">
      <div className="w-full">
        <h2 className="text-center lg:text-left">
          <FormattedMessage id="landingPage.doYouNeed" />
        </h2>
        <ul className="list-none p-0 m-o">
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
        </ul>
      </div>
    </div>
  );

  const latestTips = (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-center mt-10 mb-4">
        <FormattedMessage id="landingPage.latestTips" />
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {tips.map(tip => {
          const {
            frontmatter: { title, date },
            fields: { slug },
          } = tip;

          const coverUrl = generateVueTipImageUrl(slug);

          return (
            <LinkCard
              key={slug}
              slug={slug}
              date={date}
              coverUrl={coverUrl}
              dataCy={`latest-tip`}
              to={`/tips${slug}`}
              title={title}
            />
          );
        })}
      </div>

      <LinkButton
        className="mb-10"
        dataCy="hero-more-tips-button"
        href="/tips"
        i18nId="landingPage.moreTipsLink"
      />
    </section>
  );

  const latestBlogPosts = (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-center mt-10 mb-4">
        <FormattedMessage id="landingPage.latestBlogPosts" />
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {posts.map(post => {
          const {
            frontmatter: { title, cover },
            fields: { slug, prefix },
          } = post;
          return (
            <LinkCard
              key={slug}
              slug={slug}
              date={prefix}
              cover={cover}
              dataCy={`latest-blog-post`}
              to={`/blog${slug}`}
              title={title}
            />
          );
        })}
      </div>

      <LinkButton
        className="mb-10"
        dataCy="hero-more-blog-posts-button"
        href="/blog"
        i18nId="general.moreBlogPostsLink"
      />
    </section>
  );

  const featuredPrivateProjects = (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-center mt-10 mb-4">
        <FormattedMessage id="landingPage.featuredPrivateProjects" />
      </h2>
      <div
        className="grid grid-cols-1 gap-12 md:grid-cols-2"
        data-cy="hero-private-projects-section"
      >
        {config.projects
          .filter(p => p.featured)
          .map(project => {
            const { imageName, title, urls } = project;
            return (
              <LinkCard
                key={title}
                title={title}
                cover={projectAssets.edges
                  .map(e => e.node)
                  .filter(n => n.childImageSharp)
                  .find(n =>
                    n.childImageSharp.gatsbyImageData.images.fallback.src.includes(
                      imageName
                    )
                  )}
                dataCy={`home-project-card`}
                to={urls.page}
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>{skills}</div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <StaticImage
              alt={config.baseNameWithTitle}
              title="Michael Hoffmann"
              placeholder="blurred"
              height={1920}
              className="rounded-lg shadow-md"
              src="../images/contact.jpg"
            />
          </div>
          <p className="text-center mt-5 text-xl">
            <FormattedMessage id="landingPage.myName" />{' '}
            <strong>
              <Link to="/about">Michael Hoffmann</Link>
            </strong>{' '}
            <FormattedMessage id="landingPage.rightPlace" />
          </p>
        </div>
      </div>
      <Button
        dataCy="home-hire-me-button"
        className="w-full md:w-72 h-16 mb-2 mx-2 mt-8"
        onClick={() => {
          sendCustomAnalyticsEvent('Hire me button clicked');
          navigate('/contact');
        }}
      >
        <span className="mr-2" role="img" aria-label="phone">
          <FaLaptopCode />
        </span>
        <FormattedMessage id="landingPage.hireMe" />
      </Button>
      <References className="my-10" dataCy="home-references" />
    </div>
  );

  const businessProjects = (
    <section>
      <h2 className="text-center mt-10 mb-4">
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
        description: descriptionEn,
        image: seoImageUrl,
      }}
    >
      <Article className="flex flex-col min-h-screen">
        {introduction}
        {businessProjects}
        {latestBlogPosts}
        {latestTips}
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
            prefix
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
    latestTips: allMdx(
      filter: { fields: { source: { eq: "tips" }, slug: { ne: null } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
