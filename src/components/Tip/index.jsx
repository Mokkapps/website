import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Tip = ({ id, slug, cover, title, className }) => (
  <Link
    className={`flex flex-col justify-start items-center cursor-pointer rounded-md bg-none bg-secondary shadow-md p-4 ${className}`}
    to={`/tips${slug}`}
    data-cy={`tip-${id}`}
    key={slug}
  >
    <GatsbyImage
      image={cover.childImageSharp.gatsbyImageData}
      alt={`${title} Image`}
      className="mb-4"
    />
    <div className="w-full">
      <h3 className="text-main-text">{title}</h3>
    </div>
  </Link>
);

Tip.propTypes = {
  cover: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Tip;
