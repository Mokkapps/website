import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

const Meta = props => {
  const {
    prefix,
    icons: { calendar: CalendarIcon },
  } = props;

  return (
    <p className="flex flex-col flex-wrap text-secondary-text text-xs">
      <span className="flex items-center mt-2 mb-4">
        {CalendarIcon && <CalendarIcon className="mr-1 w-4 h-4" />}{' '}
        {<FormattedDate value={prefix} />}
      </span>
    </p>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string,
  categories: PropTypes.array,
  categoryLink: PropTypes.bool,
  icons: PropTypes.object,
};

export default Meta;
