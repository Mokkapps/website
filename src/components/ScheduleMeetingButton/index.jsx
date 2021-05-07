import React from 'react';
import { openPopupWidget } from 'react-calendly';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '../Button';
import { sendCustomAnalyticsEvent } from '../../utils/helper';

const ScheduleMeetingButton = props => {
  const options = {
    url: 'https://calendly.com/mokkapps',
  };
  const { dataCy, className } = props;
  return (
    <Button
      dataCy={dataCy}
      className={className}
      onClick={() => {
        sendCustomAnalyticsEvent('Schedule meeting button clicked');
        openPopupWidget(options);
      }}
    >
      <span className="mr-2" role="img" aria-label="phone">
        📞
      </span>
      <FormattedMessage id="landingPage.scheduleMeeting" />
    </Button>
  );
};

ScheduleMeetingButton.propTypes = {
  dataCy: PropTypes.string,
  className: PropTypes.string,
};

export default ScheduleMeetingButton;
