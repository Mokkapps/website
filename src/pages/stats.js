import React from 'react';
import { getSrc } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import config from '@content/meta/config';

import Layout from '@components/Layout';
import Heading from '@components/Heading';
import Article from '@components/Article';
import SiteStats from '@components/Stats/SiteStats';
import SocialMediaStats from '@components/Stats/SocialMediaStats';
import ArticleStats from '@components/Stats/ArticleStats';
import GithubRepo from '@components/Stats/GithubRepo';
import Sponsors from '@components/Stats/Sponsors';

const StatsPage = props => {
  const {
    data: {
      seoImage,
      allBlogPosts: { totalCount: blogPostCount },
      allTips: { totalCount: tipsCount },
    },
  } = props;
  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout
      seo={{
        url: `${siteUrl}/stats`,
        title: `Stats${siteTitlePostfix}`,
        description: 'Some statistics about my portfolio website',
        image: `${config.siteUrl}${getSrc(seoImage)}`,
      }}
    >
      <Article>
        <Heading i18nId="statsPage.title" />
        <section className="flex flex-col mt-10">
          <SiteStats />
        </section>
        <section className="flex flex-col mt-8">
          <SocialMediaStats />
        </section>
        <section className="flex flex-col mt-8">
          <ArticleStats blogPostCount={blogPostCount} tipsCount={tipsCount} />
        </section>
        <h3 className="mt-8">
          <FormattedMessage id="statsPage.githubRepo.title" />
        </h3>
        <section className="flex flex-col p-4 bg-secondary rounded-md">
          <GithubRepo />
        </section>
        <h3 className="mt-8">
          <FormattedMessage id="statsPage.sponsors.title" />
        </h3>
        <section className="flex flex-col p-4 bg-secondary rounded-md">
          <Sponsors />
        </section>
      </Article>
    </Layout>
  );
};

StatsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StatsPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-stats.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    allBlogPosts: allMdx(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
    ) {
      totalCount
    }
    allTips: allMdx(
      filter: { fields: { source: { eq: "tips" }, slug: { ne: null } } }
    ) {
      totalCount
    }
  }
`;
