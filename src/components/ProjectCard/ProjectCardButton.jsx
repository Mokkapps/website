import React from 'react';

import './styles.scss';

export default ({ url, icon }) => (
  <a
    href={url}
    className="project-card__desc-button"
    onClick={e => {
      e.stopPropagation();
    }}
  >
    {' '}
    {icon ? (
      <img
        className="project-card__desc-button-image"
        alt={`${url} link`}
        height={25}
        width={25}
        src={`https://unpkg.com/simple-icons@latest/icons/${icon}.svg`}
      />
    ) : null}
    GitHub
  </a>
);
