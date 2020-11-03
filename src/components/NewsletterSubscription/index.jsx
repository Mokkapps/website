import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

const Form = styled.form`
  text-align: center;
  color: var(--text-main);
`;

const SubscribeInput = styled.input`
  background-color: var(--accent);
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: var(--text-main);
  padding: 0.5rem 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const NewsletterSubscription = ({ intl }) => {
  return (
    <Form
      action="https://mokkapps.us19.list-manage.com/subscribe/post?u=587746a905932c04ed4e175bb&amp;id=220816f8fa"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <SubscribeInput
        className="mt-2"
        type="submit"
        value={intl.formatMessage({ id: 'joinTheNewsletter' })}
      />
    </Form>
  );
};

NewsletterSubscription.propTypes = {
  intl: PropTypes.any.isRequired,
};

export default injectIntl(NewsletterSubscription);
