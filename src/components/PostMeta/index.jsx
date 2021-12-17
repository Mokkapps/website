import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, FormattedMessage } from 'react-intl';

const PostMeta = props => {
  const {
    prefix,
    timeToRead,
    lastUpdated,
    className,
    icons: { calendar: CalendarIcon, read: ReadIcon },
  } = props;

  return (
    <section
      className={`flex flex-col justify-center items-center ${className}`}
    >
      <div className="flex flex-col">
        <span className="flex items-center">
          {CalendarIcon && <CalendarIcon className="mr-2 w-4 h-4" />}{' '}
          {<FormattedDate value={prefix} />} |{' '}
          {ReadIcon && <ReadIcon className="ml-1 mr-2 w-4 h-4" />} {timeToRead}{' '}
          <FormattedMessage id="blogPage.minuteRead" />
        </span>
      </div>
      {lastUpdated ? <div className="flex flex-col mt-2">
        <span className="text-s text-secondary-text">(Updated on <FormattedDate value={lastUpdated} />)</span>
      </div> : null}
    </section>
  );
};

PostMeta.propTypes = {
  prefix: PropTypes.string,
  timeToRead: PropTypes.number,
  lastUpdated: PropTypes.string,
  className: PropTypes.string,
  icons: PropTypes.object,
};

export default PostMeta;
