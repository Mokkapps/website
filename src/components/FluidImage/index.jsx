import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { customMedia } from '../../utils/style-utils';

const Image = styled(Img)`
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;

  ${customMedia.between('xs', 'lg')`
      width: 100%;
  `};
`;

const FluidImage = ({ image }) => (
  <Image alt="Michael Hoffmann Image" fluid={image.childImageSharp.fluid} />
);

FluidImage.propTypes = {
  image: PropTypes.object.isRequired
};

export default FluidImage;

