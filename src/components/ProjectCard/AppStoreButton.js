import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';

import './styles.scss';

export default ({ type, url }) => (
  <MobileStoreButton className="project-card__store-button" store={type} url={url} />
);
