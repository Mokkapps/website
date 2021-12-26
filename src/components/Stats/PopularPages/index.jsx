import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { FormattedMessage } from 'react-intl';

import { formatNumber } from 'utils';

const StatsPopularPages = ({ dataCy, className, metrics, loading }) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center bg-secondary rounded-md shadow-md p-8`}
      data-cy={dataCy}
    >
      {loading ? (
        <Loader
          type="TailSpin"
          color="var(--accent)"
          height={25}
          width={25}
          className="mb-2"
        />
      ) : null}
      <div className="grid grid-cols-12 gap-4 justify-end">
        {metrics ? (
          <>
            <span className="text-lg bold col-span-10">
              <FormattedMessage id="statsPage.articleStats.pageColumn" />
            </span>
            <span className="text-lg bold justify-self-end col-span-2">
              <FormattedMessage id="statsPage.articleStats.pageViews" />
            </span>
            {metrics.slice(0, 5).map(({ x: slug, y: count }) => (
              <>
                <a
                  href={`https://mokkapps.de${slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 col-span-10"
                >
                  {slug}
                </a>
                <span className="justify-self-end col-span-2">
                  {formatNumber(count)}
                </span>
              </>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

StatsPopularPages.propTypes = {
  dataCy: PropTypes.string,
  className: PropTypes.string,
  metrics: PropTypes.array,
  loading: PropTypes.bool,
};

export default StatsPopularPages;
