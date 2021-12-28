import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ProjectCardDescription from 'components/ProjectCard/ProjectCardDescription';

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
  <a
    className={`flex flex-col bg-none shadow-md bg-secondary rounded-md m-2 max-w-full no-underline ${
      block ? 'w-full' : 'w-64'
    }`}
    data-cy={`card-${id}`}
    href={urls.page}
    id={id}
  >
    <GatsbyImage
      className="rounded-t-md min-h-200px"
      alt={`${title} Image`}
      image={asset}
    />
    <ProjectCardDescription
      minimal={minimal}
      projectName={title}
      description={description}
      urls={urls}
      usedTechnologies={usedTechnologies}
    />
    {children}
  </a>
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
