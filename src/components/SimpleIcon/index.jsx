import React from 'react';
import PropTypes from 'prop-types';
import * as simpleIcons from 'simple-icons';

const SimpleIcon = ({ className, iconName }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `${simpleIcons.get(iconName).svg}`,
    }}
  />
);

SimpleIcon.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
};

export default SimpleIcon;
