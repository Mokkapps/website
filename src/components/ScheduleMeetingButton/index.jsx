import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { FaPhoneAlt } from 'react-icons/fa';

import Button from 'components/Button';
import { sendCustomAnalyticsEvent } from 'utils';

const ScheduleMeetingButton = props => {
  const [open, setOpen] = useState(false);
  const options = {
    url: 'https://calendly.com/mokkapps',
  };
  const { dataCy, className } = props;
  return (
    <>
      <PopupModal
        url={options.url}
        onModalClose={() => setOpen(false)}
        open={open}
        rootElement={document.getElementById('___gatsby')}
      />
      <Button
        dataCy={dataCy}
        className={className}
        onClick={() => {
          sendCustomAnalyticsEvent('Schedule meeting button clicked');
          setOpen(true);
        }}
      >
        <span className="mr-2" role="img" aria-label="phone">
          <FaPhoneAlt />
        </span>
        <FormattedMessage id="landingPage.scheduleMeeting" />
      </Button>
    </>
  );
};

ScheduleMeetingButton.propTypes = {
  dataCy: PropTypes.string,
  className: PropTypes.string,
};

export default ScheduleMeetingButton;
