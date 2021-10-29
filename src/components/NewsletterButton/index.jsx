import React from 'react';
import { FormattedMessage } from 'react-intl';
import { sendCustomAnalyticsEvent } from '../../utils/helper';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NewsletterButton = ({ dataCy, className }) => {
  return (
    <Link
      data-cy={dataCy}
      to="/newsletter"
      className={`flex justify-center items-center rounded-lg px-4 bg-primary h-12 ${className}`}
      onClick={() => sendCustomAnalyticsEvent('Clicked join the newsletter')}
    >
      <span className="mr-2 text-xl" role="img" aria-label="Newspaper Icon">
        🗞
      </span>
      <span className="text-l font-bold flex text-main-text">
        <FormattedMessage id="newsletterPage.joinTheNewsletter" />
      </span>
    </Link>
  );
};

NewsletterButton.propTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default NewsletterButton;
