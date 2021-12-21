import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Loader from 'react-loader-spinner';

import { formatNumber } from '@utils';

const StatsCard = ({ dataCy, className, value, i18nId, loading }) => {
  const formattedValue = value ? formatNumber(value) : '--';
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
      ) : (
        <span className="bold text-4xl">{formattedValue}</span>
      )}
      {i18nId ? (
        <span className="mt-4 text-sm text-secondary-text">
          <FormattedMessage id={i18nId} />
        </span>
      ) : null}
    </div>
  );
};

StatsCard.propTypes = {
  dataCy: PropTypes.string,
  className: PropTypes.string,
  i18nId: PropTypes.string,
  loading: PropTypes.bool,
  value: PropTypes.number,
};

export default StatsCard;
