import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFetch } from 'hooks/useFetch';
import StatsCard from 'components/Stats/StatsCard';

const SiteStats = () => {
  const {
    status: totalPageviewsStatus,
    data: totalPageviewsData,
    error: totalPageviewsError,
  } = useFetch(`${process.env.API_URL}analytics/total-page-views`);

  const {
    status: subscribersStatus,
    data: subscribersData,
    error: subscribersError,
  } = useFetch(`${process.env.API_URL}newsletter/subscribers`);

  return (
    <>
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
    </>
  );
};

SiteStats.propTypes = {};

export default SiteStats;
