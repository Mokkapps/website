import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

import { sendCustomAnalyticsEvent } from '@utils';
import config from '@content/meta/config';
import { LanguageContext } from '../../context/languageContext';

const HireTheAuthor = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div
      className="flex flex-col bg-secondary rounded-md"
      data-cy="hire-the-author"
    >
      <Link
        className="w-100 flex flex-col bg-none rounded-lg user-select-none"
        to="/contact"
        onClick={() => sendCustomAnalyticsEvent('Hire the author card clicked')}
      >
        <h3 className="text-main-text p-2 mb-0">
          <FormattedMessage id="sidebar.hireTheAuthor.title" />
        </h3>
        <StaticImage
          alt={config.baseNameWithTitle}
          src="../../images/about.jpg"
          className="m-1"
        />
        <p className="p-2 bg-secondary text-main-text text-center text-md">
          {lang === 'en' ? config.descriptionEn : config.descriptionDe}
        </p>
      </Link>
    </div>
  );
};

HireTheAuthor.propTypes = {
  image: PropTypes.object,
};

export default HireTheAuthor;
