import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFetch } from 'hooks/useFetch';
import StatsCard from 'components/Stats/StatsCard';

const SocialMediaStats = () => {
  const githubUsername = 'mokkapps';

  const {
    status: githubFollowersStatus,
    data: githubFollowersData,
    error: githubFollowersError,
  } = useFetch(`https://api.github.com/users/${githubUsername}`);

  const {
    status: hashnodeFollowersStatus,
    data: hashnodeFollowersData,
    error: hashnodeFollowersError,
  } = useFetch(`${process.env.GATSBY_API_URL}followers/hashnode`);

  const {
    status: twitterFollowersStatus,
    data: twitterFollowersData,
    error: twitterFollowersError,
  } = useFetch(`${process.env.GATSBY_API_URL}followers/twitter`);

  const {
    status: devToFollowersStatus,
    data: devToFollowersData,
    error: devToFollowersError,
  } = useFetch(`${process.env.GATSBY_API_URL}followers/dev-to`);

  const {
    status: mediumFollowersStatus,
    data: mediumFollowersData,
    error: mediumFollowersError,
  } = useFetch(`${process.env.GATSBY_API_URL}followers/medium`);

  const {
    status: stackOverflowReputationStatus,
    data: stackOverflowReputationData,
    error: stackOverflowReputationError,
  } = useFetch(`${process.env.GATSBY_API_URL}stackoverflow/reputation`);

  return (
    <>
      <h2>
        <FormattedMessage id="statsPage.socialMediaStats.title" />
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          className="mt-4"
          loading={githubFollowersStatus === 'fetching'}
          value={githubFollowersError ? null : githubFollowersData.followers}
          i18nId="statsPage.socialMediaStats.githubFollowers"
        />
        <StatsCard
          className="mt-4"
          loading={twitterFollowersStatus === 'fetching'}
          value={twitterFollowersError ? null : twitterFollowersData.followers}
          i18nId="statsPage.socialMediaStats.twitterFollowers"
        />
        <StatsCard
          className="mt-4"
          loading={devToFollowersStatus === 'fetching'}
          value={devToFollowersError ? null : devToFollowersData.followers}
          i18nId="statsPage.socialMediaStats.devToFollowers"
        />
        <StatsCard
          className="mt-4"
          loading={hashnodeFollowersStatus === 'fetching'}
          value={
            hashnodeFollowersError ? null : hashnodeFollowersData.followers
          }
          i18nId="statsPage.socialMediaStats.hashnodeFollowers"
        />
        <StatsCard
          className="mt-4"
          loading={mediumFollowersStatus === 'fetching'}
          value={mediumFollowersError ? null : mediumFollowersData.followers}
          i18nId="statsPage.socialMediaStats.mediumFollowers"
        />
        <StatsCard
          className="mt-4"
          loading={stackOverflowReputationStatus === 'fetching'}
          value={
            stackOverflowReputationError
              ? null
              : stackOverflowReputationData.reputation
          }
          i18nId="statsPage.socialMediaStats.stackOverflowReputation"
        />
      </div>
    </>
  );
};

SocialMediaStats.propTypes = {};

export default SocialMediaStats;
