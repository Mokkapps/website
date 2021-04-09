import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const testimonialCount = 2;

const TestimonialSlider = ({ intl, className }) => {
  const testimonials = [];

  for (let i = 1; i <= testimonialCount; i++) {
    testimonials.push({
      name: intl.formatMessage({ id: 'testimonialName' + i }),
      text: intl.formatMessage({ id: 'testimonialText' + i }),
    });
  }

  const randomIndex = Math.floor(Math.random() * testimonials.length);

  if (typeof window === "undefined") {
    return <p>Server Render</p>
  }

  return (
    <Splide
      className={className}
      options={{
        type: 'loop',
        autoplay: true,
        width: '100%',
        start: randomIndex,
        pagination: false,
      }}
    >
      {testimonials.map(t => (
        <SplideSlide key={t.name}>
          <div className="px-16 flex">
            <div className="stylistic-quote-mark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote
              className={`relative text-xl italic bg-neutral-100 text-neutral-600 border-neutral-500 ${className}`}
            >
              <div className="flex flex-col">
                <cite className="mb-4">{t.text}</cite>
                <p className="text-sm">{t.name}</p>
              </div>
            </blockquote>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

TestimonialSlider.propTypes = {
  intl: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default injectIntl(TestimonialSlider);
