import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components';

import ProjectCardButton from './ProjectCardButton';
import AppStoreButton from './AppStoreButton';

import { customMedia } from '../../utils/style-utils';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;

  flex: 0 0 auto;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  background-color: #ecf0f1;
`;

const Heading = styled.h3`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 3px;
  color: #2c3e50;
  word-wrap: normal;
  ${customMedia.lessThan('md')`
    font-size: 1.2em;
  `};
`;

const Divider = styled.hr`
  margin: 1rem 0 1rem 0;
`;

const DescriptionText = styled.p`
  color: black;
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
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TechIcon = styled.i`
  margin: 0 0.25rem 0 0.25rem;
  color: black;
`;

const TechText = styled.p`
  margin: 0 0.25rem 0 0.25rem;
  color: black;
`;

const ProjectCardDescription = ({
  projectName,
  description,
  urls,
  minimal,
  usedTechnologies,
}) => (
  <Container>
    <Heading>{projectName}</Heading>
    {minimal ? null : (
      <div>
        <Divider />
        <TechnologiesContainer>
          {usedTechnologies.map(
            tech =>
              tech.iconClassName ? (
                <TechIcon key={tech.iconClassName} className={tech.iconClassName} />
              ) : (
                <TechText key={tech.name}>{tech.name}</TechText>
              )
          )}
        </TechnologiesContainer>
        <Divider />
        <DescriptionText>{description}</DescriptionText>
        <ButtonsContainer>
          {urls.github ? (
            <ProjectCardButton icon="github" url={urls.github} />
          ) : null}
          {urls.googlePlay ? (
            <div style={{ marginTop: '1rem' }}>
              <AppStoreButton
                store="android"
                width={240}
                url={urls.googlePlay}
              />
            </div>
          ) : null}
          {urls.appStore ? (
            <div>
              <AppStoreButton store="ios" width={240} url={urls.appStore} />
            </div>
          ) : null}
        </ButtonsContainer>
      </div>
    )}
  </Container>
);

ProjectCardDescription.propTypes = {
  description: PropTypes.string.isRequired,
  minimal: PropTypes.bool,
  projectName: PropTypes.string.isRequired,
  urls: PropTypes.object.isRequired,
  usedTechnologies: PropTypes.array
};

export default ProjectCardDescription;

