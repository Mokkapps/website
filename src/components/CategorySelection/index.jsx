import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import { capitalize, metaIcons } from '../../utils/helper';

const CategorySelection = ({ categories, centered, className }) => {
  const categoriesLinks = categories.map(category => {
    const link = (
      <Link to={`/categories/${category.replace(' ', '-')}`}>
        {capitalize(category)}
      </Link>
    );
    const TagIcon = metaIcons.tag;

    return (
      <span
        className="flex items-center my-0 mx-2"
        key={category}
        data-cy={`blog-category-${category}`}
      >
        {TagIcon && (
          <TagIcon style={{ marginRight: '.25rem', width: 20, height: 20 }} />
        )}
        {link}
      </span>
    );
  });

  return centered ? (
    <div
      className={`${className} grid gap-2 grid-cols-2 grid-rows-5 md:grid-cols-4 md:grid-rows-2 grid-flow-col xxl:grid-cols-6 xxl:grid-rows-1`}
    >
      {categoriesLinks}
    </div>
  ) : (
    <ul className="list-none">
      {categoriesLinks.map((cl, i) => (
        <li key={i}>{cl}</li>
      ))}
    </ul>
  );
};

CategorySelection.propTypes = {
  categories: PropTypes.array.isRequired,
  centered: PropTypes.bool,
  props: PropTypes.node,
};

export default CategorySelection;
