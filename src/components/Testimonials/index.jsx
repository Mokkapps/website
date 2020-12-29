import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

const testimonialCount = 2;

const Testimonials = ({ intl, className }) => {
  const testimonials = [];

  for (let i = 1; i <= testimonialCount; i++) {
    testimonials.push({
      name: intl.formatMessage({ id: 'testimonialName' + i }),
      text: intl.formatMessage({ id: 'testimonialText' + i }),
    });
  }

  const randomTestimonial =
    testimonials[Math.floor(Math.random() * testimonials.length)];

  return (
    <blockquote
      className={`relative p-4 text-xl italic bg-neutral-100 text-neutral-600 border-neutral-500 max-w-6xl quote ${className}`}
    >
      <div className="stylistic-quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <div className="flex flex-col">
        <cite className="mb-4">{randomTestimonial.text}</cite>
        <p className="text-sm">{randomTestimonial.name}</p>
      </div>
    </blockquote>
  );
};

Testimonials.propTypes = {
  intl: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default injectIntl(Testimonials);
