import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { getFormattedDate } from 'utils';

const FeaturedBlogPost = ({ post, className }) => {
  if (!post) {
    return null;
  }

  const {
    frontmatter: { cover, title },
    fields: { slug, prefix: date },
  } = post;
  return (
    <Link
      to={`/blog${slug}`}
      className={`${className} flex flex-col lg:flex-row gap-8 bg-secondary p-4 rounded-md no-underline`}
    >
      <div className="flex flex-col">
        <span className="text-s text-secondary-text">Featured Article</span>
        <div className="flex flex-col justify-center h-full">
          <span className="text-2xl">{title}</span>
          <span className="text-xs text-secondary-text mt-2">{getFormattedDate(date)}</span>
        </div>
      </div>
      <GatsbyImage
        alt={`${title} Image`}
        image={cover.childImageSharp.gatsbyImageData}
        className="rounded-md"
      />
    </Link>
  );
};

FeaturedBlogPost.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string,
};

export default FeaturedBlogPost;
