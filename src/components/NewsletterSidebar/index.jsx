import PropTypes from 'prop-types';
import React from 'react';

import NewsletterSubscription from 'components/NewsletterSubscription';

const NewsletterSidebar = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center border-secondary border-2 p-4 rounded-md shadow-md ${className}`}
    >
      <NewsletterSubscription
        dataCy="newsletter-subscription-sidebar"
        minimal
      />
    </div>
  );
};

NewsletterSidebar.propTypes = {
  className: PropTypes.string,
};

export default NewsletterSidebar;
