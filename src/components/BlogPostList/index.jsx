import React from 'react';
import PropTypes from 'prop-types';

import BlogPost from '../BlogPost';

const BlogPostList = props => {
  const { items, author, metaIcons } = props;
  let count = 0;

  return (
    <div className="flex justify-center">
      <ul className="list-none w-100" data-cy="blog-post-list">
        {items.map(item => {
          const {
            frontmatter: { title, categories, cover },
            fields: { slug, prefix },
            excerpt,
          } = item;

          const component = (
            <li className="mb-4" key={slug}>
              <BlogPost
                id={count}
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

          count++;

          return component;
        })}
      </ul>
    </div>
  );
};

BlogPostList.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  metaIcons: PropTypes.object,
};

export default BlogPostList;
