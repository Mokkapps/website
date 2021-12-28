import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useFetch } from 'hooks/useFetch';
import StatsCard from 'components/Stats/StatsCard';
import { getFormattedDate } from "../../../utils";

const SiteStats = () => {
  const {
    status: totalPageviewsStatus,
    data: totalPageviewsData,
    error: totalPageviewsError,
  } = useFetch(`${process.env.GATSBY_API_URL}analytics/total-page-views`);

  const {
    status: liveVisitorsStatus,
    data: liveVisitorsData,
    error: liveVisitorsError,
  } = useFetch(`${process.env.GATSBY_API_URL}analytics/live-visitors`);

  const {
    status: subscribersStatus,
    data: subscribersData,
    error: subscribersError,
  } = useFetch(`${process.env.GATSBY_API_URL}newsletter/subscribers`);

  return (
    <>
      <h2>
        <FormattedMessage id="statsPage.siteStats.title" />
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          className="mt-4 col-span-2"
          loading={liveVisitorsStatus === 'fetching'}
          value={liveVisitorsError ? null : liveVisitorsData.pageviews}
          i18nId="statsPage.siteStats.liveVisitors"
          i18nValues={{date: getFormattedDate(new Date(), true)}}
          showActiveIndicator
        />
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
