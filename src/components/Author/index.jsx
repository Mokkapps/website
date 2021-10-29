import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import config from '../../content/meta/config';
import BuyMeACoffeeButton from '../BuyMeACoffeeButton';
import SocialLinks from '../SocialLink/SocialLinks';
import { LanguageContext } from '../../context/languageContext';
import NewsletterButton from "../NewsletterButton";

const Author = ({ className }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <section
      className={`flex flex-wrap justify-center bg-secondary rounded-md shadow-md ${className}`}
    >
      <StaticImage
        alt={config.baseNameWithTitle}
        width={200}
        height={200}
        className="my-4 rounded-md"
        src="../../images/about.jpg"
      />
      <div className="flex flex-col justify-center items-center p-4">
        <h3 className="text-center">{config.baseName}</h3>
        <p className="py-2 px-4 text-center mb-0">
          {lang === 'en' ? config.descriptionEn : config.descriptionDe}
        </p>
        <SocialLinks className="mt-2" onlyFavorites />
        <div className="flex flex-col sm:flex-row my-4">
          <BuyMeACoffeeButton dataCy="footer-buy-coffee-button" />
          <NewsletterButton dataCy="footer-newsletter-button" />
        </div>
      </div>
    </section>
  );
};

Author.propTypes = {
  className: PropTypes.string,
};

export default Author;
