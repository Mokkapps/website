import React from 'react';
import ProjectCard from '../ProjectCard';

import './ProjectList.scss';

import config from '../../content/meta/config';
import { getAsset } from '../../utils/helper';

const ProjectList = ({ projectAssets }) => {
  const { edges } = projectAssets;
  return (
    <section className="projects__container">
      {config.projects.map(project => {
        const {
          imageName,
          title,
          description,
          urls,
          usedTechnologies,
        } = project;
        return (
          <ProjectCard
            key={title}
            usedTechnologies={usedTechnologies}
            asset={getAsset(edges, imageName)}
            title={title}
            description={description.short}
            urls={urls}
          />
        );
      })}
    </section>
  );
};

export default ProjectList;
