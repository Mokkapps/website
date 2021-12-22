import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFetch } from '@hooks/useFetch';
import StatsCard from '@components/Stats/StatsCard';

const SocialMediaStats = () => {
  const {
    status: githubFollowersStatus,
    data: githubFollowersData,
    error: githubFollowersError,
  } = useFetch('/api/statistics/github-followers');

  const {
    status: twitterFollowersStatus,
    data: twitterFollowersData,
    error: twitterFollowersError,
  } = useFetch(`${process.env.API_URL}followers/twitter`);

  const {
    status: devToFollowersStatus,
    data: devToFollowersData,
    error: devToFollowersError,
  } = useFetch(`${process.env.API_URL}followers/dev-to`);

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
          value={
            twitterFollowersError ? null : twitterFollowersData.followers
          }
          i18nId="statsPage.socialMediaStats.twitterFollowers"
        />{' '}
        <StatsCard
          className="mt-4"
          loading={devToFollowersStatus === 'fetching'}
          value={devToFollowersError ? null : devToFollowersData.followers}
          i18nId="statsPage.socialMediaStats.devToFollowers"
        />
      </div>
    </>
  );
};

SocialMediaStats.propTypes = {
};

export default SocialMediaStats;
