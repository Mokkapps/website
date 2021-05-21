import PropTypes from 'prop-types';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'react-intl';

import content from '../../content/meta/config';
import BuyMeACoffeeButton from '../BuyMeACoffeeButton';
import SocialLinks from '../SocialLink/SocialLinks';

const Author = ({ className }) => (
  <section
    className={`flex flex-wrap justify-center bg-secondary rounded-md shadow-md ${className}`}
  >
    <StaticImage
      alt={content.baseName}
      width={200}
      height={200}
      className="my-4 rounded-md"
      src="../../images/about.jpg"
    />
    <div className="flex flex-col justify-center items-center p-4">
      <h3 className="text-center">Michael Hoffmann</h3>
      <p className="py-2 px-4 text-center mb-0">
        <FormattedMessage id="hireTheAuthor.shortSummary" />
      </p>
      <SocialLinks className="mt-2" onlyFavorites />
      <BuyMeACoffeeButton className="my-4" />
    </div>
  </section>
);

Author.propTypes = {
  className: PropTypes.string,
};

export default Author;
