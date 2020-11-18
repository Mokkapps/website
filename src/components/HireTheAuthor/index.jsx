import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import { sendCustomAnalyticsEvent } from '../../utils/helper';

const HireTheAuthor = ({ image }) => (
  <div className="flex flex-col" data-cy="hire-the-author">
    <a
      className="w-100 flex flex-col bg-none rounded-lg user-select-none"
      href="/contact"
      onClick={() => sendCustomAnalyticsEvent('Hire the author card clicked')}
    >
      <Img fluid={image.childImageSharp.fluid} />
      <p className="p-2 bg-secondary text-main-text text-center text-md">
        <FormattedMessage id="shortSummary"></FormattedMessage>
      </p>
    </a>
  </div>
);

HireTheAuthor.propTypes = {
  image: PropTypes.object,
};

export default HireTheAuthor;
