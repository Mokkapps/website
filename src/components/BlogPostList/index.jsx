import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlogPost from '../BlogPost';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
`;

const BlogPostList = props => {
  const { items, author, metaIcons } = props;

  return (
    <Container>
      <List>
        {items.map(item => {
          const {
            frontmatter: { title, categories, cover },
            fields: { slug, prefix },
            excerpt,
          } = item;

          return (
            <li>
              <BlogPost
                key={slug}
                title={title}
                slug={slug}
                cover={cover}
                categories={categories}
                prefix={prefix}
                author={author}
                metaIcons={metaIcons}
                excerpt={excerpt}
              />
            </li>
          );
        })}
      </List>
    </Container>
  );
};

BlogPostList.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  metaIcons: PropTypes.object,
};

export default BlogPostList;
