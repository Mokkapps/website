import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Button from '../Button';

const ContactForm = () => {
  const intl = useIntl();

  return (
    <div className="flex justify-center px-12 py-12 md:px-8 md:py-6 w-full">
      <form
        className="w-full lg:w-1/2"
        name="contact-form"
        action="/success"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        netlify="true"
      >
        <div hidden>
          <label>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="name">Name</label>
          <input data-cy="contact-name" name="name" type="text" required />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="email">E-Mail</label>
          <input data-cy="contact-email" name="email" type="email" required />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="emailType">E-Mail Type</label>
          <select className="bg-secondary rounded-md py-1" name="emailType">
            <option value="consulting">
              {intl.formatMessage({ id: 'contactPage.emailTypes.consulting' })}
            </option>
            <option value="question">
              {intl.formatMessage({ id: 'contactPage.emailTypes.help' })}
            </option>
            <option value="other">
              {intl.formatMessage({ id: 'contactPage.emailTypes.other' })}
            </option>
          </select>
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="message">
            <FormattedMessage id="contactPage.yourMessage" />
          </label>
          <textarea data-cy="contact-message" name="message" required />
        </div>
        <div data-netlify-recaptcha="true" />
        <Button className="mt-4 w-full" type="submit">
          <FormattedMessage id="contactPage.send" />
        </Button>
        <input type="hidden" name="form-name" value="contact-form" />
      </form>
    </div>
  );
};

export default ContactForm;
