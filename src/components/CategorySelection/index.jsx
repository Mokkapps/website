import PropTypes from 'prop-types';
import React from 'react';

import CategoryLink from 'components/CategoryLink';

const priorityMap = {
  'vue-js': 10,
  'nuxt-js': 9,
  frontend: 8,
  fullstack: 7,
  development: 6,
};

const CategorySelection = ({ categories, className, dataCy }) => {
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
      key={category.name}
      className={className}
      category={category.name}
      dataCy={`blog-category-${category.name}`}
    />
  ));

  return (
    <div
      data-cy={dataCy}
      className={`${className} flex flex-wrap justify-center lg:justify-start gap-2`}
    >
      {categoriesLinks}
    </div>
  );
};

CategorySelection.propTypes = {
  categories: PropTypes.array.isRequired,
  className: PropTypes.string,
  dataCy: PropTypes.string,
  props: PropTypes.node,
};

export default CategorySelection;
