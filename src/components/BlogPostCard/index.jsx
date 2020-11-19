import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Card from '../Card';

const StyledCard = styled(Card)`
  display: flex;
  flex-flow: column;
  box-shadow: 0 10px 30px rgba(#2c3e50, 0.5);
  background: var(--secondary);
`;

const ProjectImage = styled(Img)`
  margin: 0.3rem;
  min-height: 200px;
`;

const BlogPostCard = props => {
  const { url, id, asset, title } = props;
  return (
    <StyledCard className="p-4" url={url} id={id}>
      <ProjectImage fluid={asset.childImageSharp.fluid} />
      <h3 className="text-secondary-text p-2 flex items-center h-full">{title}</h3>
    </StyledCard>
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
