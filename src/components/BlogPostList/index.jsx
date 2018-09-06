import React from 'react';
import Img from 'gatsby-image';
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
            frontmatter: { title, categories, cover },
            fields: { slug, prefix },
            excerpt,
          } = item;

          return (
            <li key={slug} className="blog-list__item">
              {cover ? (
                <Img
                  outerWrapperClassName="blog-list__item-image"
                  fluid={cover.childImageSharp.fluid}
                />
              ) : null}
              <Link
                className="blog-list__item-text"
                to={`/blog${slug}`}
              >
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
