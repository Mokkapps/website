import React from 'react';

import './ProjectCardDescription.scss';

export default ({ projectName, description, rating, url }) => (
  <div className="project-card-description-box">
    <div className="project-card-name">{projectName}</div>
    <p className="project-card-description">{description}</p>
    <div className="row">
      <a className="buy-button" href={url}>
        Buy now
      </a>
    </div>
  </div>
);
