import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

import Card from '../Card';

const ProjectImage = styled(GatsbyImage)`
  margin: 0.3rem;
  min-height: 200px;
`;

const BlogPostCard = props => {
  const { url, id, asset, title } = props;
  return (
    <Card url={url} id={id}>
      <ProjectImage alt={`${title} Image`} placeholder="blurred" image={asset.childImageSharp.gatsbyImageData} />
      <h3 className="text-main-text p-4 flex items-center h-full">{title}</h3>
    </Card>
  );
};

BlogPostCard.propTypes = {
  asset: PropTypes.object.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  dataCy: PropTypes.string,
};

export default BlogPostCard;
