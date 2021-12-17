import React from 'react';
import PropTypes from 'prop-types';

import LinkCard from '../LinkCard';

const BlogPostList = props => {
  const { items, onlyTwoCols = false } = props;
  let count = 0;

  return (
    <div
      className={`w-100 ${
        onlyTwoCols
          ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
          : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'
      } `}
      data-cy="blog-post-list"
    >
      {items.map(item => {
        const {
          frontmatter: { title, cover },
          fields: { slug, prefix },
        } = item;

        const component = (
          <LinkCard
            key={slug}
            cover={cover}
            dataCy={`blog-post-${count}`}
            date={prefix}
            to={`/blog${slug}`}
            title={title}
          />
        );

        count++;

        return component;
      })}
    </div>
  );
};

BlogPostList.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  onlyTwoCols: PropTypes.bool,
  metaIcons: PropTypes.object,
};

export default BlogPostList;
