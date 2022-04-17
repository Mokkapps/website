import PropTypes from 'prop-types';
import React from 'react';

import { sendCustomAnalyticsEvent } from 'utils';

const SocialLink = props => {
  const {
    link: { url, ariaLabel, icon },
    largeIcons,
  } = props;

  const Icon = icon;

  const dataCyLabel = ariaLabel.replace(/\./g, '').replace(/\s/g, '').toLowerCase();

  return (
    <a
      {...props}
      className={`flex content-center rounded-full items-center mx-1 ${
        largeIcons ? 'p-2' : 'p-1.5'
      } transform transition-all hover:scale-110`}
      href={url}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      data-cy={`social-link-${dataCyLabel}`}
      onClick={() =>
        sendCustomAnalyticsEvent(`Clicked "${ariaLabel}" social link`)
      }
    >
      <Icon className={`text-main-text ${largeIcons ? 'w-5 h-5' : 'w-4 h-4'}`} />
    </a>
  );
};

SocialLink.propTypes = {
  largeIcons: PropTypes.bool,
  link: PropTypes.object.isRequired,
};

export default SocialLink;
