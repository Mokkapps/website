import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'react-intl';

import { sendCustomAnalyticsEvent } from '../../utils/helper';
import config from '../../content/meta/config';
import SocialLinks from '../SocialLink/SocialLinks';

const HireTheAuthor = () => (
  <div className="flex flex-col bg-secondary rounded-md" data-cy="hire-the-author">
    <a
      className="w-100 flex flex-col bg-none rounded-lg user-select-none"
      href="/contact"
      onClick={() => sendCustomAnalyticsEvent('Hire the author card clicked')}
    >
      <StaticImage alt={config.baseName} src="../../images/about.jpg" className="m-1" />
      <p className="p-2 bg-secondary text-main-text text-center text-md">
        <FormattedMessage id="hireTheAuthor.shortSummary" />
      </p>
    </a>
    <SocialLinks onlyFavorites className="p-2 justify-center" />
  </div>
);

HireTheAuthor.propTypes = {
  image: PropTypes.object,
};

export default HireTheAuthor;
