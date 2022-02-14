import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { TailSpin } from 'react-loader-spinner';

import { formatNumber } from 'utils';

const StatsCard = ({
  dataCy,
  className,
  value,
  i18nId,
  i18nValues,
  loading,
  showActiveIndicator,
}) => {
  const formattedValue = value ? formatNumber(value) : '--';

  const indicator =
    showActiveIndicator && value ? (
      <span className="flex ml-4 h-3 w-3">
        <span className="relative inline-flex rounded-full h-3 w-3 bg-success" />
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-success opacity-75" />
      </span>
    ) : null;

  return (
    <div
      className={`${className} flex flex-col items-center justify-center bg-secondary rounded-md shadow-md p-8`}
      data-cy={dataCy}
    >
      {loading ? (
        <TailSpin
          color="var(--accent)"
          height={25}
          width={25}
          className="mb-2"
        />
      ) : (
        <div className="flex items-center">
          <span className="bold text-4xl">{formattedValue}</span>
          {indicator}
        </div>
      )}
      {i18nId ? (
        <span className="mt-4 text-sm text-secondary-text">
          <FormattedMessage id={i18nId} values={i18nValues} />
        </span>
      ) : null}
    </div>
  );
};

StatsCard.propTypes = {
  dataCy: PropTypes.string,
  className: PropTypes.string,
  i18nId: PropTypes.string,
  i18nValues: PropTypes.object,
  loading: PropTypes.bool,
  showActiveIndicator: PropTypes.bool,
  value: PropTypes.number,
};

export default StatsCard;
