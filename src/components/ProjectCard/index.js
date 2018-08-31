import React from 'react';
import Img from 'gatsby-image';

import Card from '../Card';
import ProjectCardDescription from './ProjectCardDescription';

import './ProjectCard.scss';

const ProjectCard = ({ photo, projectName, description, rating, url }) => (
  <Card className="product-card">
    <Img className="gallery gallery-item" fixed={photo.childImageSharp.fixed} />
    <ProjectCardDescription
      projectName={projectName}
      description={description}
      rating={rating}
      url={url}
    />
  </Card>
);

export default ProjectCard;
