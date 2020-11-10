import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../ProjectCard';
import config from '../../content/meta/config';
import { getAsset } from '../../utils/helper';

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
`;

const ProjectList = ({ projectAssets }) => {
  const { edges } = projectAssets;
  let count = 0;
  return (
    <Container data-cy="projects-list">
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
            asset={getAsset(edges, imageName)}
            title={title}
            description={description.short}
            urls={urls}
          />
        );

        count++;

        return comp;
      })}
    </Container>
  );
};

ProjectList.propTypes = {
  projectAssets: PropTypes.object.isRequired
};

export default ProjectList;

