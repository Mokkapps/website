import PropTypes from 'prop-types';
import React from 'react';
import SimpleIcon from '../SimpleIcon';

const SocialLink = props => {
  const { url, ariaLabel, icon } = props.link;
  return (
    <a
      {...props}
      className="bg-color-toggle-light flex content-center rounded-full items-center mx-1 p-1.5 transform transition-all hover:bg-accent hover:scale-110"
      href={url}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      data-cy={`social-link-${icon}`}
    >
      <SimpleIcon iconName={icon} className="w-4 h-4" />
    </a>
  );
};

SocialLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default SocialLink;
