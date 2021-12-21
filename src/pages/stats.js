import React from 'react';
import { getSrc } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import config from '@content/meta/config';
import { useFetch } from '@hooks/useFetch';

import Layout from '@components/Layout';
import Heading from '@components/Heading';
import Article from '@components/Article';
import StatsCard from '@components/StatsCard';
import StatsPopularPages from '@components/StatsPopularPages';
import Button from '@components/Button';
import { sendCustomAnalyticsEvent } from '../utils';

const StatsPage = props => {
  const {
    data: {
      seoImage,
      allBlogPosts: { totalCount: blogPostCount },
      allTips: { totalCount: tipsCount },
    },
  } = props;
  const { siteUrl, siteTitlePostfix } = config;

  console.log(props);

  const {
    status: totalReactionStatus,
    data: totalStatusData,
    error: totalStatusError,
  } = useFetch('/api/statistics/total-reactions');

  const {
    status: totalPageviewsStatus,
    data: totalPageviewsData,
    error: totalPageviewsError,
  } = useFetch('/api/statistics/total-pageviews');

  const {
    status: popularPagesStatus,
    data: popularPagesData,
    error: popularPagesError,
  } = useFetch('/api/statistics/popular-pages-last-30-days');

  const {
    status: totalIssuesStatus,
    data: totalIssuesData,
    error: totalIssuesError,
  } = useFetch('/api/statistics/total-issues');

  const {
    status: subscribersStatus,
    data: subscribersData,
    error: subscribersError,
  } = useFetch('/api/statistics/subscribers');

  const {
    status: githubFollowersStatus,
    data: githubFollowersData,
    error: githubFollowersError,
  } = useFetch('/api/statistics/github-followers');

  const { data: githubRepoData } = useFetch('/api/statistics/github-repo');

  const {
    status: twitterFollowersStatus,
    data: twitterFollowersData,
    error: twitterFollowersError,
  } = useFetch('/api/statistics/twitter-followers');

  const {
    status: devToFollowersStatus,
    data: devToFollowersData,
    error: devToFollowersError,
  } = useFetch('/api/statistics/dev-to-followers');

  const { data: buyMeACoffeeData } = useFetch(
    '/api/statistics/buy-me-a-coffee'
  );

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
          <h2>
            <FormattedMessage id="statsPage.siteStats.title" />
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <StatsCard
              className="mt-4"
              loading={totalPageviewsStatus === 'fetching'}
              value={totalPageviewsError ? null : totalPageviewsData.pageviews}
              i18nId="statsPage.siteStats.pageViews"
            />
            <StatsCard
              className="mt-4"
              loading={subscribersStatus === 'fetching'}
              value={subscribersError ? null : subscribersData.count}
              i18nId="statsPage.siteStats.newsletterSubscribers"
            />
          </div>
        </section>
        <section className="flex flex-col mt-8">
          <h2>
            <FormattedMessage id="statsPage.socialMediaStats.title" />
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <StatsCard
              className="mt-4"
              loading={githubFollowersStatus === 'fetching'}
              value={
                githubFollowersError ? null : githubFollowersData.followers
              }
              i18nId="statsPage.socialMediaStats.githubFollowers"
            />
            <StatsCard
              className="mt-4"
              loading={twitterFollowersStatus === 'fetching'}
              value={
                twitterFollowersError
                  ? null
                  : twitterFollowersData.followerCount
              }
              i18nId="statsPage.socialMediaStats.twitterFollowers"
            />{' '}
            <StatsCard
              className="mt-4"
              loading={devToFollowersStatus === 'fetching'}
              value={
                devToFollowersError ? null : devToFollowersData.followerCount
              }
              i18nId="statsPage.socialMediaStats.devToFollowers"
            />
          </div>
        </section>
        <section className="flex flex-col mt-8">
          <h2>
            <FormattedMessage id="statsPage.articleStats.title" />
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <StatsCard
              className="mt-4"
              value={blogPostCount}
              i18nId="statsPage.articleStats.publishedArticles"
            />
            <StatsCard
              className="mt-4"
              value={tipsCount}
              i18nId="statsPage.articleStats.publishedTips"
            />
            <StatsCard
              className="mt-4"
              loading={totalIssuesStatus === 'fetching'}
              value={totalIssuesError ? null : totalIssuesData.count}
              i18nId="statsPage.articleStats.publishedNewsletters"
            />
            <StatsCard
              className="mt-4"
              loading={totalReactionStatus === 'fetching'}
              value={totalStatusError ? null : totalStatusData.totalReactions}
              i18nId="statsPage.articleStats.totalReactions"
            />
          </div>
          <div className="flex flex-col mt-8">
            <h3>
              <FormattedMessage id="statsPage.articleStats.popularPages" />
            </h3>
            <StatsPopularPages
              className="mt-2"
              loading={popularPagesStatus === 'fetching'}
              metrics={popularPagesError ? [] : popularPagesData.metrics}
            />
          </div>
        </section>
        <h3 className="mt-8">
          <FormattedMessage id="statsPage.githubRepo.title" />
        </h3>
        <section className="flex flex-col p-4 bg-secondary rounded-md">
          <span className="text-lg">
            <FormattedMessage
              id="statsPage.githubRepo.description"
              values={{
                stars: (
                  <strong className="text-accent text-2xl">
                    {githubRepoData ? githubRepoData.stars : '--'}
                  </strong>
                ),
                forks: (
                  <strong className="text-accent text-2xl">
                    {githubRepoData ? githubRepoData.forks : '--'}
                  </strong>
                ),
              }}
            />
          </span>
          <div className="flex mt-4">
            <Button
              className="mr-2"
              onClick={() => {
                sendCustomAnalyticsEvent('Clicked GitHub follow button');
                window.open('https://github.com/mokkapps', '_blank');
              }}
            >
              <FormattedMessage id="statsPage.githubRepo.buttons.follow" />
            </Button>
            <Button
              className="mr-2"
              onClick={() => {
                sendCustomAnalyticsEvent('Clicked GitHub fork button');
                window.open(
                  'https://github.com/mokkapps/website/fork',
                  '_blank'
                );
              }}
            >
              <FormattedMessage id="statsPage.githubRepo.buttons.fork" />
            </Button>
            <Button
              onClick={() => {
                sendCustomAnalyticsEvent('Clicked GitHub star button');
                window.open('https://github.com/mokkapps/website', '_blank');
              }}
            >
              <FormattedMessage id="statsPage.githubRepo.buttons.star" />
            </Button>
          </div>
        </section>
        <h3 className="mt-8">
          <FormattedMessage id="statsPage.sponsors.title" />
        </h3>
        <section className="flex flex-col p-4 bg-secondary rounded-md">
          <span>
            <FormattedMessage
              id="statsPage.sponsors.description"
              values={{
                supporterCount: (
                  <strong className="text-accent text-2xl">
                    {buyMeACoffeeData && buyMeACoffeeData.supporters
                      ? buyMeACoffeeData.supporters.length
                      : '--'}
                  </strong>
                ),
                coffeeCount: (
                  <strong className="text-accent text-2xl">
                    {buyMeACoffeeData ? buyMeACoffeeData.coffeeCount : '--'}
                  </strong>
                ),
                supporterName: (
                  <strong className="text-accent text-2xl">
                    {buyMeACoffeeData && buyMeACoffeeData.supporters
                      ? buyMeACoffeeData.supporters[0].name
                      : '--'}
                  </strong>
                ),
              }}
            />
          </span>
          <Button
            className="mt-4"
            onClick={() => {
              sendCustomAnalyticsEvent('Clicked sponsor button on stats page');
              window.open('https://www.buymeacoffee.com/mokkapps', '_blank');
            }}
          >
            <FormattedMessage id="statsPage.sponsors.button" />
          </Button>
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
