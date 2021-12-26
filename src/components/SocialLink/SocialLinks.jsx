import PropTypes from 'prop-types';
import React from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDev,
  FaLinkedin,
  FaFacebook,
  FaNpm,
  FaRss,
  FaRegEnvelope,
  FaRegEdit
} from 'react-icons/fa';

import SocialLink from 'components/SocialLink/SocialLink';

export const SOCIAL_LINKS = [
  {
    id: 'twitter',
    url: 'https://twitter.com/mokkapps',
    icon: FaTwitter,
    ariaLabel: 'Twitter',
    favorite: true,
  },
  {
    url: 'https://github.com/mokkapps',
    icon: FaGithub,
    ariaLabel: 'GitHub',
    favorite: true,
  },
  {
    url: 'https://dev.to/mokkapps',
    icon: FaDev,
    ariaLabel: 'DEV.to',
  },
  {
    url: 'https://www.linkedin.com/in/mokkapps',
    icon: FaLinkedin,
    ariaLabel: 'LinkedIn',
    favorite: true,
  },
  {
    url: 'https://www.instagram.com/mokkapps/',
    icon: FaInstagram,
    ariaLabel: 'Instagram',
    favorite: true,
  },
  {
    url: 'https://www.facebook.com/mokkapps-dev/',
    icon: FaFacebook,
    ariaLabel: 'Facebook',
  },
  {
    url: 'https://mokkapps.hashnode.dev/',
    icon: FaRegEdit,
    ariaLabel: 'Hashnode',
  },
  {
    url: 'https://www.npmjs.com/~mokkapps',
    icon: FaNpm,
    ariaLabel: 'npm',
  },
  {
    url: `https://mokkapps.de/rss.xml`,
    icon: FaRss,
    ariaLabel: 'Mokkapps RSS Feed',
    favorite: true,
  },
  {
    url: 'mailto:mail@mokkapps.de',
    icon: FaRegEnvelope,
    ariaLabel: 'Send email',
    favorite: true,
  },
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
