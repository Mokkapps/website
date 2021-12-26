import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { StaticImage } from 'gatsby-plugin-image';
import { FaRegEye, FaRegCalendar, FaRegClock } from 'react-icons/fa';

import { getFormattedDate, formatNumber } from 'utils';
import { baseNameWithTitle } from 'content/meta/config';
import CategoryLink from 'components/CategoryLink';

const PostMeta = ({
  date,
  timeToRead,
  lastUpdated,
  className,
  pageViews,
  categories,
}) => {
  const views = (
    <div className="flex items-center">
      {<FaRegEye className="mr-2 w-4 h-4" />}
      <FormattedMessage
        id="general.views"
        values={{
          count: pageViews != null ? formatNumber(pageViews) : '-',
        }}
      />
    </div>
  );

  const formattedDate = (
    <div className="flex items-center">
      {<FaRegCalendar className="mr-2 w-4 h-4" />}
      {getFormattedDate(date)}
    </div>
  );

  const readTime = (
    <div className="flex items-center">
      {<FaRegClock className="mr-2 w-4 h-4" />}
      <FormattedMessage
        id="blogPage.minuteRead"
        values={{ minutes: timeToRead }}
      />
    </div>
  );

  const divider = <span className="mx-2">|</span>;

  const lastUpdatedText = lastUpdated ? (
    <span className="text-s text-secondary-text">
      (Updated on {getFormattedDate(lastUpdated)})
    </span>
  ) : null;

  const desktopMeta = (
    <div className="flex flex-col">
      <div className="flex items-center">
        {formattedDate}
        {divider}
        {readTime}
        {divider}
        {views}
      </div>
      <div className="flex mt-2">{lastUpdatedText}</div>
    </div>
  );

  const mobileMeta = (
    <div className="flex flex-col">
      <div className="flex items-center">{formattedDate}</div>
      <div className="flex items-center mt-2">
        {readTime}
        {divider}
        {views}
      </div>
      <div className="flex mt-2">{lastUpdatedText}</div>
    </div>
  );

  return (
    <section className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        <StaticImage
          alt={baseNameWithTitle}
          className="rounded-full mr-8"
          layout="fixed"
          width={60}
          height={60}
          src="../../images/about.jpg"
        />
        <div className="hidden sm:flex">{desktopMeta}</div>
        <div className="flex sm:hidden">{mobileMeta}</div>
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
