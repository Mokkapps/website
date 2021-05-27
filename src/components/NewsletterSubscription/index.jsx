import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

const NewsletterSubscription = ({ className }) => {
  const intl = useIntl();

  return (
    <div id="revue-embed" className={`${className} flex justify-center`}>
      <form
        action="https://www.getrevue.co/profile/mokkapps/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="member_email">
            {intl.formatMessage({ id: 'newsletterPage.email' })}
          </label>
          <input
            className="revue-form-field"
            type="email"
            name="member[email]"
            id="member_email"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="member_first_name">
            {intl.formatMessage({ id: 'newsletterPage.firstName' })}
          </label>
          <input
            className="revue-form-field"
            type="text"
            name="member[first_name]"
            id="member_first_name"
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
          />
        </div>
        <input
          className="w-full h-14 cursor-pointer bg-accent my-8"
          type="submit"
          value={intl.formatMessage({ id: 'newsletterPage.subscribe' })}
          name="member[subscribe]"
          id="member_submit"
        />
        <div className="revue-form-footer">
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
        </div>
      </form>
    </div>
  );
};

NewsletterSubscription.propTypes = {
  className: PropTypes.string,
};

export default NewsletterSubscription;
