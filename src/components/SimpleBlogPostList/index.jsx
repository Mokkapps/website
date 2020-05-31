import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SimpleBlogPostList = props => {
  const { items } = props;

  return (
    <Container>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title },
            fields: { slug, prefix },
          } = item;
          return (
            <li key={slug}>
              <Link to={`/blog${slug}`}>
                {prefix}: {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

SimpleBlogPostList.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  metaIcons: PropTypes.object,
};

export default SimpleBlogPostList;
