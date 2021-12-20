import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import { FaRegEye, FaRegCalendar, FaRegClock } from 'react-icons/fa';

import { getFormattedDate, formatNumber } from '@utils';
import { baseNameWithTitle } from '@content/meta/config';
import CategoryLink from '@components/CategoryLink';

const PostMeta = ({
  date,
  timeToRead,
  lastUpdated,
  className,
  pageViews,
  categories,
}) => {
  return (
    <section className={`flex flex-col ${className}`}>
      <div className="flex flex-col md:flex-row items-center">
        <StaticImage
          alt={baseNameWithTitle}
          className="rounded-full mr-8"
          layout="fixed"
          width={60}
          height={60}
          src="../../images/about.jpg"
        />
        <div className="flex flex-col mt-4 md:mt-0">
          <div className="flex flex-col">
            <span className="flex items-center">
              {<FaRegCalendar className="mr-2 w-4 h-4" />}{' '}
              {getFormattedDate(date)} |{' '}
              {<FaRegClock className="ml-1 mr-2 w-4 h-4" />} {timeToRead}{' '}
              <FormattedMessage id="blogPage.minuteRead" />
            </span>
            <div className="flex items-center mt-2">
              {<FaRegEye className="mr-2 w-4 h-4" />}{' '}
              <FormattedMessage
                id="general.views"
                values={{
                  count: pageViews != null ? formatNumber(pageViews) : '-',
                }}
              />
            </div>
          </div>
          {lastUpdated ? (
            <div className="flex flex-col mt-2">
              <span className="text-s text-secondary-text">
                (Updated on {getFormattedDate(lastUpdated)})
              </span>
            </div>
          ) : null}
        </div>
      </div>
      {categories?.length > 0 ? (
        <div className="flex flex-wrap mt-4">
          {categories.map(category => (
            <CategoryLink
              key={category}
              category={category}
              dataCy={`blog-category-${category}`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
};

PostMeta.propTypes = {
  date: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  timeToRead: PropTypes.number,
  pageViews: PropTypes.number,
  lastUpdated: PropTypes.string,
  className: PropTypes.string,
  icons: PropTypes.object,
};

export default PostMeta;
