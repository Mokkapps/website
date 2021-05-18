import React from 'react';
import PropTypes from 'prop-types';
import { getCategoryDisplayText } from '../../utils/helper';
import { navigate } from 'gatsby-link';

const CategoryLink = ({ category, dataCy, className, compact = false }) => {
  const linkTo = `/categories/${category.replace(' ', '-')}`;

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      navigate(linkTo);
    }
  };

  return (
    <div
      role="button"
      tabIndex="0"
      className={`${className} ${
        compact ? 'py-0.5 px-1 m-1' : 'px-2 py-1 my-2 mx-2'
      } select-none hover:cursor-pointer hover:bg-accent border border-accent rounded-md text-center`}
      key={category}
      data-cy={dataCy}
      onClick={() => navigate(linkTo)}
      onKeyPress={onKeyPress}
    >
      {getCategoryDisplayText(category)}
    </div>
  );
};

CategoryLink.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
  dataCy: PropTypes.string,
  compact: PropTypes.bool,
};

export default CategoryLink;
