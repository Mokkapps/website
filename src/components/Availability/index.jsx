import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const availability = new Date('2022-04-01');

const Availability = ({ className, dataCy }) => {
  const availabilityDate = new Date(availability);
  const isValidAvailabilityDate = !isNaN(availabilityDate.getTime());
  const currentDate = new Date();
  const isAvailable = availabilityDate <= currentDate;

  return !isValidAvailabilityDate ? null : (
    <div
      className={`${className} rounded-lg px-2 py-1 flex items-center justify-center`}
      data-cy={dataCy}
    >
      {isAvailable ? (
        <div className="rounded-full h-4 w-4 available mr-2" />
      ) : (
        <div className="rounded-full h-4 w-4 not-available mr-2" />
      )}
      <FormattedMessage
        id={
          isAvailable ? 'availability.available' : 'availability.notAvailable'
        }
        defaultMessage=""
        values={{
          date: (
            <FormattedDate
              value={availabilityDate}
              year="numeric"
              month="long"
              day="2-digit"
            />
          ),
        }}
      />
    </div>
  );
};

Availability.propTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default Availability;
