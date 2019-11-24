import PropTypes from 'prop-types'
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Card from '../Card';
import ProjectCardDescription from './ProjectCardDescription';

const StyledCard = styled(Card)`
  display: flex;
  flex-flow: column;
  box-shadow: 0 10px 30px rgba(#2c3e50, 0.5);
`;

const ProjectImage = styled(Img)`
  margin: 0.3rem;
  min-height: 200px;
`;

const ProjectCard = ({
  id,
  asset,
  title,
  description,
  urls,
  minimal,
  usedTechnologies,
  children
}) => (
  <StyledCard url={urls.page} clickable id={id}>
    <ProjectImage sizes={asset.childImageSharp.sizes} />
    <ProjectCardDescription
      minimal={minimal}
      projectName={title}
      description={description}
      urls={urls}
      usedTechnologies={usedTechnologies}
    />
    {children}
  </StyledCard>
);

ProjectCard.propTypes = {
  asset: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number,
  minimal: PropTypes.bool,
  title: PropTypes.string.isRequired,
  urls: PropTypes.object.isRequired,
  usedTechnologies: PropTypes.array,
  children: PropTypes.object,
};

export default ProjectCard;

