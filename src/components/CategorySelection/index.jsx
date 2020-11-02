import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { capitalize, metaIcons } from '../../utils/helper';

const Category = styled.span`
  display: flex;
  align-items: center;
  margin: 0 1rem 0 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.centered ? 'center' : 'flex-start')};
`;

const CategorySelection = ({ categories, centered, props }) => (
  <Container {...props} data-cy="blog-categories" centered={centered}>
    {categories.map(category => {
      const link = (
        <Link to={`/categories/${category.replace(' ', '-')}`}>
          {capitalize(category)}
        </Link>
      );
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
  categories: PropTypes.array.isRequired,
  centered: PropTypes.bool,
  props: PropTypes.node,
};

export default CategorySelection;
