import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Meta from '../Meta';

import './BlogPostList.scss';

const BlogPostList = props => {
  const { items, author, metaIcons } = props;

  return (
    <div className="blog-list">
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title, categories },
            fields: { slug, prefix },
            excerpt,
          } = item;

          return (
            <li key={slug}>
              <Link to={slug}>
                <h3>{title}</h3>
                <Meta
                  categories={categories}
                  prefix={prefix}
                  author={author}
                  categoryLink={false}
                  icons={metaIcons}
                />
                <p>{excerpt}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

BlogPostList.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  customStyle: PropTypes.string,
  metaIcons: PropTypes.object,
};

export default BlogPostList;
