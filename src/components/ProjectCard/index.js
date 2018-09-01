import React from 'react';
import Img from 'gatsby-image';

import Card from '../Card';
import ProjectCardDescription from './ProjectCardDescription';

import './styles.scss';

const ProjectCard = ({ asset, title, description, urls }) => (
  <Card className="project-card">
    <Img className="project-card__image" sizes={asset.childImageSharp.sizes} />
    <ProjectCardDescription
      projectName={title}
      description={description}
      urls={urls}
    />
  </Card>
);

export default ProjectCard;
