import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'gatsby';

import { sendCustomAnalyticsEvent } from 'utils';
import Alert from 'components/Alert';
import Button from 'components/Button';

const NewsletterSubscription = ({
  dataCy,
  className,
  heading = true,
  notConvinced = true,
  shortInfo = false,
  grid = false,
}) => {
  const intl = useIntl();
  const [inputFocussed, setInputFocussed] = useState(false);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();

    if (!email) {
      return;
    }

    sendCustomAnalyticsEvent('Newsletter form submitted');

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.GATSBY_API_URL}newsletter/add-subscriber`,
        {
          method: 'POST',
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        setShowError(true);
        return;
      }

      setShowSuccess(true);
    } catch (e) {
      console.error('Failed to add subscriber', e);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${className} w-full flex flex-col`} data-cy={dataCy}>
      {heading ? (
        <span className="text-main-text text-xl mb-0">
          <FormattedMessage id="sidebar.newsletter.title" />
        </span>
      ) : null}
      {shortInfo ? (
        <span className="text-sm mt-2">
          <FormattedMessage id="newsletterPage.shortInfo" />
        </span>
      ) : null}
      <span className="text-sm bold mt-2">
        <FormattedMessage id="newsletterPage.noSpam" />
      </span>
      <form className="mt-2" onSubmit={event => onSubmit(event)}>
        <div
          className={`${
            grid ? 'grid grid-cols-12 gap-4 items-center' : 'flex flex-col'
          }`}
        >
          <div className={`${grid ? 'col-span-10' : 'mt-2'}`}>
            <div className="flex flex-col">
              <input
                type="email"
                required
                value={email}
                placeholder="you@email.com"
                onChange={event => setEmail(event.target.value)}
                onFocus={() => setInputFocussed(true)}
                data-cy="newsletter-email-input"
              />
            </div>
          </div>
          <Button
            disabled={loading}
            loading={loading}
            type="submit"
            className={`${grid ? 'col-span-2' : 'mt-4'}`}
            dataCy="newsletter-submit-button"
          >
            {intl.formatMessage({ id: 'newsletterPage.subscribe' })}
          </Button>
        </div>
        {showError ? (
          <Alert
            className="mt-4"
            type="error"
            text={intl.formatMessage({ id: 'newsletterPage.subscribeError' })}
            onClose={() => setShowError(false)}
          />
        ) : null}
        {showSuccess ? (
          <Alert
            className="mt-4"
            type="success"
            text={intl.formatMessage({ id: 'newsletterPage.subscribeSuccess' })}
            onClose={() => setShowSuccess(false)}
          />
        ) : null}
        {inputFocussed ? (
          <div className="revue-form-footer my-2">
            <span className="text-xs">
              <FormattedMessage
                id="newsletterPage.revueInfo"
                values={{
                  termsAndServiceLink: (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.getrevue.co/terms"
                    >
                      Terms of Service
                    </a>
                  ),
                  privacyPolicyLink: (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.getrevue.co/privacy"
                    >
                      Privacy Policy.
                    </a>
                  ),
                }}
              />
            </span>
          </div>
        ) : null}
        {notConvinced ? (
          <span className="text-xs mt-2">
            <Link to="/newsletter">
              <FormattedMessage id="newsletterPage.notConvinced" />
            </Link>
          </span>
        ) : null}
      </form>
    </div>
  );
};

NewsletterSubscription.propTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
  heading: PropTypes.bool,
  notConvinced: PropTypes.bool,
  shortInfo: PropTypes.bool,
  grid: PropTypes.bool,
};

export default NewsletterSubscription;
