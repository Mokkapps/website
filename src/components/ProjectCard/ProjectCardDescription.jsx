import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import AppStoreButton from '@components/AppStoreButton';
import Divider from '@components/Divider';
import DevIcon from '@components/DevIcon';

const ProjectCardDescription = ({
  projectName,
  description,
  urls,
  minimal,
  usedTechnologies,
}) => (
  <div className="flex flex-col p-4">
    <span className="text-xl text-main-text font-bold text-center">{projectName}</span>
    {minimal ? null : (
      <div className="mt-4">
        <Divider />
        <div className="flex flex-wrap justify-center items-center">
          {usedTechnologies.map(tech => (
            <DevIcon
              key={tech}
              technology={tech}
              size="text-xl"
              className="text-main-text mr-2"
            />
          ))}
        </div>
        <Divider />
        <p className="text-secondary-text text-center mt-4">{description}</p>
        <div className="flex flex-col items-center justify-center mt-4">
          {urls.googlePlay && (
            <div className="mt-1">
              <AppStoreButton store="android" url={urls.googlePlay} />
            </div>
          )}
          {urls.appStore && (
            <div>
              <AppStoreButton store="ios" url={urls.appStore} />
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

ProjectCardDescription.propTypes = {
  description: PropTypes.string.isRequired,
  minimal: PropTypes.bool,
  projectName: PropTypes.string.isRequired,
  urls: PropTypes.object.isRequired,
  usedTechnologies: PropTypes.array,
};

export default ProjectCardDescription;
