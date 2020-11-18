import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ProjectCardButton from './ProjectCardButton';
import AppStoreButton from './AppStoreButton';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  flex: 0 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--secondary);
`;

const Heading = styled.h3`
  text-align: center;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 3px;
  color: var(--text-secondary);
  word-wrap: normal;
`;

const Divider = styled.hr`
  margin: 1rem 0 1rem 0;
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
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TechIcon = styled.i`
  margin: 0 0.25rem 0 0.25rem;
  color: var(--text-main);
`;

const TechText = styled.p`
  margin: 0 0.25rem 0 0.25rem;
  color: var(--text-main);
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
          {usedTechnologies.map(tech =>
            tech.iconClassName ? (
              <TechIcon
                key={tech.iconClassName}
                className={tech.iconClassName}
              />
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
  usedTechnologies: PropTypes.array,
};

export default ProjectCardDescription;
