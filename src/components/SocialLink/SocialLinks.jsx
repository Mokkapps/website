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
    url: 'https://github.com/mokkapps',
    icon: 'github',
    ariaLabel: 'GitHub',
    favorite: true,
  },
  {
    url: 'https://dev.to/mokkapps',
    icon: 'dev-dot-to',
    ariaLabel: 'DEV.to',
  },
  {
    url: 'https://www.linkedin.com/in/michael-hoffmann-3b8933b1',
    icon: 'linkedin',
    ariaLabel: 'LinkedIn',
    favorite: true,
  },
  {
    url: 'https://www.instagram.com/mokkapps/',
    icon: 'instagram',
    ariaLabel: 'Instagram',
    favorite: true,
  },
  {
    url: 'https://www.facebook.com/mokkapps-dev/',
    icon: 'facebook',
    ariaLabel: 'Facebook',
  },
  {
    url: 'https://mokkapps.hashnode.dev/',
    icon: 'hashnode',
    ariaLabel: 'Hashnode',
  },
  {
    url: 'https://www.npmjs.com/~mokkapps',
    icon: 'npm',
    ariaLabel: 'npm'
  },
  {
    url: `https://mokkapps.de/rss.xml`,
    icon: 'rss',
    ariaLabel: 'Mokkapps RSS Feed',
    favorite: true,
  },
  {
    url: 'mailto:mail@mokkapps.de',
    icon: 'minutemailer',
    ariaLabel: 'Send email',
    favorite: true,
  }
];

const SocialLinks = ({
  onlyFavorites,
  asColumn,
  className,
  dataCy,
  largeIcons,
}) => {
  const socialLinks = onlyFavorites
    ? SOCIAL_LINKS.filter(link => link.favorite)
    : SOCIAL_LINKS;

  return (
    <div
      className={`${className} flex ${
        asColumn && 'flex-col'
      } flex-wrap justify-evenly`}
      data-cy={dataCy}
    >
      {socialLinks.map(link => (
        <div className={`${largeIcons ? 'mb-4' : 'mb-2'}`} key={link.icon}>
          <SocialLink largeIcons={largeIcons} link={link} />
        </div>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  onlyFavorites: PropTypes.bool,
  asColumn: PropTypes.bool,
  className: PropTypes.string,
  largeIcons: PropTypes.bool,
  dataCy: PropTypes.string,
};

export default SocialLinks;
