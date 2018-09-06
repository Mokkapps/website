import React from 'react';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';

import Card from '../Card';
import ProjectCardDescription from './ProjectCardDescription';

import './styles.scss';

const ProjectCard = ({
  asset,
  title,
  description,
  urls,
  minimal,
  usedTechnologies,
}) => (
  <Card
    className="project-card"
    url={urls.page}
    clickable
  >
    <Img className="project-card__image" sizes={asset.childImageSharp.sizes} />
    <ProjectCardDescription
      minimal={minimal}
      projectName={title}
      description={description}
      urls={urls}
      usedTechnologies={usedTechnologies}
    />
  </Card>
);

export default ProjectCard;
