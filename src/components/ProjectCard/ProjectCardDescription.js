import React from 'react';

import './styles.scss';

import ProjectCardButton from './ProjectCardButton';
import AppStoreButton from './AppStoreButton';

export default ({ projectName, description, rating, urls, minimal }) => (
  <div className="project-card__description-box">
    <div className="project-card__title">{projectName}</div>
    {minimal ? null : (
      <div>
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
