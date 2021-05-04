import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

import { capitalize } from '../../utils/helper';

const Meta = props => {
  const {
    prefix,
    categories,
    categoryLink = true,
    icons: { calendar: CalendarIcon, tag: TagIcon },
  } = props;

  return (
    <p className="flex flex-wrap text-secondary-text text-xs mb-2">
      <span className="flex items-center mr-4">
        {CalendarIcon && <CalendarIcon className="mr-1 w-4 h-4" />}{' '}
        {<FormattedDate value={prefix} />}
      </span>
      {categories &&
        categories.map(category => {
          const link = (
            <Link to={`/categories/${category}`}>{capitalize(category)}</Link>
          );
          const txt = <span key={category}>{capitalize(category)}</span>;

          return (
            <span className="flex items-center mr-4" key={category}>
              {TagIcon && <TagIcon className="w-4 h-4 mr-1" />}
              {categoryLink ? link : txt}
            </span>
          );
        })}
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
