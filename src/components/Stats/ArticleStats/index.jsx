import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { useFetch } from '@hooks/useFetch';
import StatsCard from '@components/Stats/StatsCard';
import StatsPopularPages from '@components/Stats/PopularPages';

const ArticleStats = ({ blogPostCount, tipsCount }) => {
  const {
    status: totalReactionStatus,
    data: totalStatusData,
    error: totalStatusError,
  } = useFetch('/api/statistics/total-reactions');

  const {
    status: popularPagesStatus,
    data: popularPagesData,
    error: popularPagesError,
  } = useFetch(`${process.env.API_URL}analytics/popular-pages`);

  const {
    status: totalIssuesStatus,
    data: totalIssuesData,
    error: totalIssuesError,
  } = useFetch(`${process.env.API_URL}newsletter/issues`);

  return (
    <>
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
    </>
  );
};

ArticleStats.propTypes = {
  blogPostCount: PropTypes.number,
  tipsCount: PropTypes.number,
};

export default ArticleStats;
