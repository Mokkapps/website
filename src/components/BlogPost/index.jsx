import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';

import Meta from '../Meta';

import './styles.scss';

const BlogPost = props => {
  const {
    id,
    slug,
    cover,
    title,
    categories,
    prefix,
    author,
    metaIcons,
    excerpt,
    className,
  } = props;
  return (
    <Link
      className={`flex flex-col lg:flex-row justify-center items-center cursor-pointer rounded-md bg-none bg-secondary shadow-md p-4 ${className}`}
      to={`/blog${slug}`}
      data-cy={`blog-post-${id}`}
      key={slug}
    >
      {cover ? (
        <GatsbyImage
          image={cover.childImageSharp.gatsbyImageData}
          alt={`${title} Image`}
          className="image mb-4 lg:mr-4" />
      ) : null}
      <div className="w-full lg:w-2/3">
        <h3 className="text-main-text">{title}</h3>
        <Meta
          categories={categories}
          prefix={prefix}
          author={author}
          categoryLink={false}
          icons={metaIcons}
        />
        <p className="text-main-text">{excerpt}</p>
      </div>
    </Link>
  );
};

BlogPost.propTypes = {
  author: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  metaIcons: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BlogPost;
