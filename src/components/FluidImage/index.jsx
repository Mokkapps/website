import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

const FluidImage = ({ image, className }) => (
  <Img
    className={`rounded-lg m-auto w-full lg:w-2/3 ${className}`}
    alt="Mokkapps (Michael Hoffmann) Freelancer Angular Image"
    fluid={image.childImageSharp.fluid}
  />
);

FluidImage.propTypes = {
  image: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default FluidImage;
