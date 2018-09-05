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
        <div className="project-card__store-buttons-container">
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
          <div />
          {urls.appStore ? (
            <div style={{ marginTop: '.5rem' }}>
              <AppStoreButton store="ios" width={240} url={urls.appStore} />
            </div>
          ) : null}
        </div>
      </div>
    )}
  </div>
);
