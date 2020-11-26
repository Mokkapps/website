import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { FormattedDate, FormattedMessage } from 'react-intl';

const apiUrl =
  process.env.NODE_ENV === `production`
    ? 'http://api.mokkapps.de'
    : 'http://localhost:5000';

const Availability = () => {
  const { data, error } = useFetch(apiUrl);
  const availability = data.availability;
  const availabilityDate = new Date(availability);
  const currentDate = new Date();
  const isAvailable = availabilityDate <= currentDate;

  return error || !data || !availabilityDate ? null : (
    // eslint-disable-next-line react/prop-types
    <div className="rounded-lg px-2 py-1 flex items-center justify-center my-4">
      {isAvailable ? (
        <div className="rounded-full h-4 w-4 available mr-2"></div>
      ) : (
        <div className="rounded-full h-4 w-4 not-available mr-2"></div>
      )}
      <FormattedMessage
        id={isAvailable ? 'available' : 'notAvailable'}
        defaultMessage=""
        values={{
          date: <FormattedDate value={availabilityDate.toLocaleDateString()} />,
        }}
      />
    </div>
  );
};

export default Availability;
