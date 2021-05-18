import PropTypes from 'prop-types';
import React from 'react';

import CategoryLink from '../CategoryLink';

const CategorySelection = ({ categories, compact, className, dataCy }) => {
  const categoriesLinks = categories.map(category => (
    <CategoryLink
      compact={compact}
      key={category}
      className={className}
      category={category}
      dataCy={`blog-category-${category}`}
    />
  ));

  return (
    <div data-cy={dataCy} className={`${className} flex flex-wrap justify-center lg:justify-start`}>
      {categoriesLinks}
    </div>
  );
};

CategorySelection.propTypes = {
  categories: PropTypes.array.isRequired,
  compact: PropTypes.bool,
  className: PropTypes.string,
  dataCy: PropTypes.string,
  props: PropTypes.node,
};

export default CategorySelection;
