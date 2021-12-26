import PropTypes from 'prop-types';
import React from 'react';

import ProjectCard from 'components/ProjectCard';
import config from 'content/meta/config';
import { getAsset } from 'utils';

const ProjectList = ({ projectAssets }) => {
  const { edges } = projectAssets;
  let count = 0;
  return (
    <section
      className="flex flex-wrap content-center self-center items-stretch justify-center"
      data-cy="projects-list"
    >
      {config.projects.map(project => {
        const {
          imageName,
          title,
          description,
          urls,
          usedTechnologies,
        } = project;

        const comp = (
          <ProjectCard
            id={count.toString()}
            key={title}
            usedTechnologies={usedTechnologies}
            asset={imageName ? getAsset(edges, imageName) : null}
            title={title}
            description={description.short}
            urls={urls}
          />
        );

        count++;

        return comp;
      })}
    </section>
  );
};

ProjectList.propTypes = {
  projectAssets: PropTypes.object.isRequired,
};

export default ProjectList;
