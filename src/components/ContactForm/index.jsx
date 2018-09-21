import React from 'react';
import styled from 'styled-components';

import ContactButton from './ContactButton';
import { customMedia } from '../../utils/style-utils';

const Container = styled.div`
  display: flex;
  justify-content: center;

  ${customMedia.lessThan('md')`
    padding: 3rem 3rem;
  `};

  ${customMedia.greaterThan('md')`
    padding: 2rem 1.5rem;
  `};

  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 350px;
        ${customMedia.lessThan('md')`
          min-width: 200px;
        `};
      }
    }
  }
`;

const Label = styled.label`
  margin: 1rem 0 1rem 0;
  color: black;
`;

const Input = styled.input`
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  background: lightgrey;
  padding: 0.25rem 1rem;
  overflow: auto;
  font: inherit;
`;

const TextArea = styled.textarea`
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  background: lightgrey;
  padding: 0.25rem 1rem;
  overflow: auto;
  font: inherit;
  padding: 1rem;
  resize: vertical;
  min-height: 150px;
  width: 100%;
`;

const ContactForm = () => (
  <Container>
    <form
      name="contact-form"
      action="/success"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      netlify="true"
    >
      <p>
        <Label htmlFor="name">Name</Label>
        <Input data-cy="contact-name" name="name" type="text" required />
      </p>
      <p>
        <Label htmlFor="email">E-Mail</Label>
        <Input data-cy="contact-email" name="email" type="email" required />
      </p>
      <p>
        <Label htmlFor="message">Your Message</Label>
        <TextArea data-cy="contact-message" name="message" required />
      </p>
      <p style={{ marginTop: '1rem' }}>
        <ContactButton>Send</ContactButton>
      </p>
      <Input type="hidden" name="form-name" value="contact-form" />
    </form>
  </Container>
);

export default ContactForm;
