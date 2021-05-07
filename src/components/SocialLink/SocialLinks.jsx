import PropTypes from 'prop-types';
import React from 'react';
import SocialLink from './SocialLink';

const SOCIAL_LINKS = [
  {
    id: 'twitter',
    url: 'https://twitter.com/mokkapps',
    icon: 'twitter',
    ariaLabel: 'Twitter',
    favorite: true,
  },
  {
    id: 'github',
    url: 'https://github.com/mokkapps',
    icon: 'github',
    ariaLabel: 'GitHub',
    favorite: true,
  },
  {
    id: 'dev.to',
    url: 'https://dev.to/mokkapps',
    icon: 'dev-dot-to',
    ariaLabel: 'DEV.to',
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/michael-hoffmann-3b8933b1',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn',
    favorite: true,
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/mokkapps/',
    icon: 'instagram',
    ariaLabel: 'Instagram',
    favorite: true,
  },
  {
    id: 'facebook',
    url: 'https://www.facebook.com/mokkapps-dev/',
    icon: 'facebook',
    ariaLabel: 'Facebook',
    favorite: true,
  },
  {
    id: 'hashnode',
    url: 'https://mokkapps.hashnode.dev/',
    icon: 'hashnode',
    ariaLabel: 'Hashnode',
  },
  {
    id: 'rss',
    url: `https://mokkapps.de/rss.xml`,
    icon: 'rss',
    ariaLabel: 'Mokkapps RSS Feed',
    favorite: true,
  },
  {
    id: 'mail',
    url: 'mailto:mail@mokkapps.de',
    icon: 'minutemailer',
    ariaLabel: 'Send email',
  },
];

const SocialLinks = ({ onlyFavorites, className, dataCy }) => {
  const socialLinks = onlyFavorites
    ? SOCIAL_LINKS.filter(link => link.favorite)
    : SOCIAL_LINKS;

  return (
    <div
      className={`${className} flex flex-wrap justify-evenly`}
      data-cy={dataCy}
    >
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
