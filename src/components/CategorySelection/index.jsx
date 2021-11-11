import PropTypes from 'prop-types';
import React from 'react';

import CategoryLink from '../CategoryLink';

const priorityMap = {
  'vue-js': 10,
  frontend: 9,
  fullstack: 8,
  development: 7,
};

const CategorySelection = ({ categories, compact, className, dataCy }) => {
  const categoryPrioritized = categories
    .map(category => ({
      priority: priorityMap[category] ?? 1,
      name: category,
    }))
    .sort((a, b) => {
      if (a.priority > b.priority) {
        return -1;
      }
      if (a.priority < b.priority) {
        return 1;
      }
      return 0;
    });

  const categoriesLinks = categoryPrioritized.map(category => (
    <CategoryLink
      compact={compact}
      key={category.name}
      className={className}
      category={category.name}
      dataCy={`blog-category-${category.name}`}
    />
  ));

  return (
    <div
      data-cy={dataCy}
      className={`${className} flex flex-wrap justify-center lg:justify-start`}
    >
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
