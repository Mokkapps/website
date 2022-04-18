import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby-link';

import { getCategoryDisplayText } from 'utils';

const CategoryLink = ({ category, dataCy, className}) => {
  const linkTo = `/blog/categories/${category.replace(' ', '-')}`;

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      navigate(linkTo);
    }
  };

  return (
    <div
      role="button"
      tabIndex="0"
      className={`${className} py-1 px-2 select-none hover:cursor-pointer bg-secondary rounded-full text-center border-transparent border hover:border-main-text`}
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
};

export default CategoryLink;
