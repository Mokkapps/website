import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import AppStoreButton from './AppStoreButton';
import CardDivider from '../Card/CardDivider';
import DevIcon from '../DevIcon';

const Heading = styled.h3`
  text-align: center;
  text-transform: uppercase;
  color: var(--text-main);
  word-wrap: normal;
`;

const DescriptionText = styled.p`
  color: var(--text-main);
  text-align: center;
  font-size: 1rem;
  letter-spacing: 2px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: center;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ProjectCardDescription = ({
  projectName,
  description,
  urls,
  minimal,
  usedTechnologies,
}) => (
  <div className="flex flex-col p-4">
    <Heading>{projectName}</Heading>
    {minimal ? null : (
      <div>
        <CardDivider />
        <TechnologiesContainer>
          {usedTechnologies.map(tech => (
            <DevIcon key={tech} technology={tech} size="xl" className="mr-2"/>
          ))}
        </TechnologiesContainer>
        <CardDivider />
        <DescriptionText>{description}</DescriptionText>
        <ButtonsContainer>
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
        </ButtonsContainer>
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
