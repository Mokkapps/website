import React from 'react';

import './styles.scss';

import ProjectCardButton from './ProjectCardButton';
import AppStoreButton from './AppStoreButton';
import DevIcon from '../DevIcon';

export default ({
  projectName,
  description,
  rating,
  urls,
  minimal,
  usedTechnologies,
}) => (
  <div className="project-card__description-box">
    <div className="project-card__title">{projectName}</div>
    {minimal ? null : (
      <div>
        <hr className="project-card__divider" />
        <div className="project-card__technologies">
          {usedTechnologies.map(
            tech =>
              tech.icon ? (
                <DevIcon
                  className="project-card__tech-item"
                  key={tech.icon}
                  iconName={tech.icon}
                />
              ) : (
                <p key={tech.name} className="project-card__tech-item">
                  {tech.name}
                </p>
              )
          )}
        </div>
        <hr className="project-card__divider" />
        <p className="project-card__description">{description}</p>
        {urls.github ? (
          <div className="project-card__desc-button-container">
            <ProjectCardButton icon="github" url={urls.github} />
          </div>
        ) : null}
        <div className="project-card__store-buttons-container">
          {urls.googlePlay ? (
            <AppStoreButton type="android" url={urls.googlePlay} />
          ) : null}
          <div />
          {urls.appStore ? (
            <div style={{ marginTop: '1rem' }}>
              <AppStoreButton type="ios" url={urls.appStore} />
            </div>
          ) : null}
        </div>
      </div>
    )}
  </div>
);
