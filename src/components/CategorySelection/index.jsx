import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { metaIcons } from '../../utils/helper';

const Category = styled.span`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategorySelection = ({ categories }) => (
  <Container data-cy="blog-categories">
    {categories.map(category => {
      const link = <Link to={`/categories/${category}`}>{category}</Link>;
      const TagIcon = metaIcons.tag;

      return (
        <Category key={category} data-cy={`blog-category-${category}`}>
          {TagIcon && (
            <TagIcon style={{ marginRight: '.25rem', width: 20, height: 20 }} />
          )}
          {link}
        </Category>
      );
    })}
  </Container>
);

CategorySelection.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategorySelection;

