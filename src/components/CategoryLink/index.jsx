import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { getCategoryDisplayText, metaIcons } from '../../utils/helper';

const CategoryLink = ({ category, dataCy, className }) => {
  const link = (
    <Link to={`/categories/${category.replace(' ', '-')}`}>
      {getCategoryDisplayText(category)}
    </Link>
  );
  const TagIcon = metaIcons.tag;

  return (
    <span
      className={`${className} flex items-center my-0 mx-2`}
      key={category}
      data-cy={dataCy}
    >
      {TagIcon && (
        <TagIcon style={{ marginRight: '.25rem', width: 20, height: 20 }} />
      )}
      {link}
    </span>
  );
};

CategoryLink.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default CategoryLink;
