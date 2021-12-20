import PropTypes from 'prop-types';
import React from 'react';
import SimpleIcon from '../SimpleIcon';
import { sendCustomAnalyticsEvent } from '../../utils';

const SocialLink = props => {
  const {
    link: { url, ariaLabel, icon },
    largeIcons,
  } = props;

  return (
    <a
      {...props}
      className={`bg-button-background flex content-center rounded-full items-center mx-1 ${
        largeIcons ? 'p-2' : 'p-1.5'
      } transform transition-all hover:bg-accent hover:scale-110`}
      href={url}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      data-cy={`social-link-${icon}`}
      onClick={() =>
        sendCustomAnalyticsEvent(`Clicked "${ariaLabel}" social link`)
      }
    >
      <SimpleIcon
        iconName={icon}
        className={`${largeIcons ? 'w-7 h-7' : 'w-4 h-4'}`}
      />
    </a>
  );
};

SocialLink.propTypes = {
  largeIcons: PropTypes.bool,
  link: PropTypes.object.isRequired,
};

export default SocialLink;
