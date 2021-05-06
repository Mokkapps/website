import PropTypes from 'prop-types';
import React from 'react';

import CategoryLink from '../CategoryLink';

const CategorySelection = ({ categories, centered, className, dataCy }) => {
  const categoriesLinks = categories.map(category => (
    <CategoryLink
      key={category}
      className={className}
      category={category}
      dataCy={`blog-category-${category}`}
    />
  ));

  return centered ? (
    <div
      data-cy={dataCy}
      className={`${className} grid gap-2 grid-cols-2 md:grid-cols-5 xxl:grid-cols-7`}
    >
      {categoriesLinks}
    </div>
  ) : (
    <ul data-cy={dataCy} className="list-none">
      {categoriesLinks.map((cl, i) => (
        <li key={i}>{cl}</li>
      ))}
    </ul>
  );
};

CategorySelection.propTypes = {
  categories: PropTypes.array.isRequired,
  centered: PropTypes.bool,
  className: PropTypes.string,
  dataCy: PropTypes.string,
  props: PropTypes.node,
};

export default CategorySelection;
