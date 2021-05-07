import React from 'react';
import { FormattedMessage } from 'react-intl';
import { sendCustomAnalyticsEvent } from '../../utils/helper';
import PropTypes from 'prop-types';

const BuyMeACoffeeButton = props => {
  return (
    <a
      href="https://www.buymeacoffee.com/mokkapps"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex justify-center items-center rounded-lg px-4 bg-primary h-12 ${props.className}`}
      onClick={() => sendCustomAnalyticsEvent('Buy me a coffee button clicked')}
    >
      <span className="mr-2 text-xl" role="img" aria-label="Coffee Icon">
        ☕️
      </span>
      <span className="text-l font-bold flex text-main-text">
        <FormattedMessage id="general.buyMeACoffee" />
      </span>
    </a>
  );
};

BuyMeACoffeeButton.propTypes = {
  className: PropTypes.string,
};

export default BuyMeACoffeeButton;
