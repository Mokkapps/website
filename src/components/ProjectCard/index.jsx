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
  asset,
  title,
  description,
  urls,
  minimal,
  usedTechnologies,
}) => (
  <StyledCard url={urls.page} clickable>
    <ProjectImage sizes={asset.childImageSharp.sizes} />
    <ProjectCardDescription
      minimal={minimal}
      projectName={title}
      description={description}
      urls={urls}
      usedTechnologies={usedTechnologies}
    />
  </StyledCard>
);

export default ProjectCard;
