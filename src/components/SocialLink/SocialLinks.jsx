import PropTypes from 'prop-types';
import React from 'react';
import config from '../../content/meta/config';
import SocialLink from './SocialLink';

const SocialLinks = ({ onlyFavorites, className, dataCy }) => {
  const socialLinks = onlyFavorites
    ? config.socialLinks.filter(link => link.favorite)
    : config.socialLinks;

  return (
    <div className={`${className} flex flex-wrap justify-evenly`} data-cy={dataCy}>
      {socialLinks.map(link => (
        <div className="mb-2" key={link.id}>
          <SocialLink link={link} />
        </div>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  onlyFavorites: PropTypes.bool,
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default SocialLinks;
