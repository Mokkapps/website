import React from 'react';

import './ContactForm.scss';
import ContactButton from './ContactButton';

const ContactForm = () => (
  <div className="contact__container">
    <form
      name="contact-form"
      action="/success"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      netlify="true"
    >
      <p>
        <label className="contact__label" htmlFor="name">
          Name
        </label>
        <input className="contact__input" name="name" type="text" required />
      </p>
      <p>
        <label className="contact__label" htmlFor="email">
          E-Mail
        </label>
        <input className="contact__input" name="email" type="email" required />
      </p>
      <p>
        <label className="contact__label" htmlFor="message">
          Your Message
        </label>
        <textarea className="contact__textarea" name="message" required />
      </p>
      <p style={{ marginTop: '1rem' }}>
        <ContactButton>Send</ContactButton>
      </p>
      <input
        className="contact__input"
        type="hidden"
        name="form-name"
        value="contact-form"
      />
    </form>
  </div>
);

export default ContactForm;
