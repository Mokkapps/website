import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Card from '../Card';
import ProjectCardDescription from './ProjectCardDescription';

const ProjectImage = styled(GatsbyImage)`
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
  children,
  block = false,
}) => (
  <Card url={urls.page} clickable id={id} block={block}>
    <ProjectImage alt={`${title} Image`} image={asset} />
    <ProjectCardDescription
      minimal={minimal}
      projectName={title}
      description={description}
      urls={urls}
      usedTechnologies={usedTechnologies}
    />
    {children}
  </Card>
);

ProjectCard.propTypes = {
  asset: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  minimal: PropTypes.bool,
  title: PropTypes.string.isRequired,
  urls: PropTypes.object.isRequired,
  usedTechnologies: PropTypes.array,
  children: PropTypes.object,
  className: PropTypes.string,
  block: PropTypes.bool,
};

export default ProjectCard;
