import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { sendCustomAnalyticsEvent } from '../../utils/helper';

const NewsletterSubscription = ({
  dataCy,
  className,
  minimal = false,
  h2Heading = false,
}) => {
  const intl = useIntl();
  const [inputFocussed, setInputFocussed] = useState(!minimal);

  return (
    <div
      id="revue-embed"
      className={`${className} w-full flex flex-col justify-center`}
      data-cy={dataCy}
    >
      {h2Heading ? (
        <h2 className="text-main-text mb-0 text-center">
          <FormattedMessage id="sidebar.newsletter.title" />
        </h2>
      ) : (
        <h3 className="text-main-text mb-0 text-center">
          <FormattedMessage id="sidebar.newsletter.title" />
        </h3>
      )}
      <form
        action="https://www.getrevue.co/profile/mokkapps/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
        onSubmit={sendCustomAnalyticsEvent('Newsletter form submitted')}
      >
        <div className="flex flex-col">
          <label htmlFor="member_email">
            {intl.formatMessage({ id: 'newsletterPage.email' })}
          </label>
          <input
            className="revue-form-field"
            type="email"
            name="member[email]"
            id="member_email"
            data-cy="newsletter-email-input"
            onFocus={() => setInputFocussed(true)}
          />
        </div>
        {minimal ? null : (
          <div className="mt-4">
            <div className="flex flex-col mb-4">
              <label htmlFor="member_first_name">
                {intl.formatMessage({ id: 'newsletterPage.firstName' })}
              </label>
              <input
                className="revue-form-field"
                type="text"
                name="member[first_name]"
                id="member_first_name"
                data-cy="newsletter-first-name-input"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="member_last_name">
                {intl.formatMessage({ id: 'newsletterPage.lastName' })}
              </label>
              <input
                className="revue-form-field"
                type="text"
                name="member[last_name]"
                id="member_last_name"
                data-cy="newsletter-last-name-input"
              />
            </div>
          </div>
        )}
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

        <input
          className="w-full h-14 cursor-pointer bg-accent mt-2"
          type="submit"
          value={intl.formatMessage({ id: 'newsletterPage.subscribe' })}
          name="member[subscribe]"
          id="member_submit"
          data-cy="newsletter-submit-input"
        />
      </form>
    </div>
  );
};

NewsletterSubscription.propTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
  minimal: PropTypes.bool,
  h2Heading: PropTypes.bool,
};

export default NewsletterSubscription;
