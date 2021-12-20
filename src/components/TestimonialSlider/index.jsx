import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const testimonialCount = 2;
const intervalTimeInMs = 7500;
const showArrows = false;

const TestimonialSlider = ({ intl, className, dataCy }) => {
  const testimonials = [];

  for (let i = 1; i <= testimonialCount; i++) {
    testimonials.push({
      name: intl.formatMessage({ id: `testimonials.testimonialName${i}` }),
      text: intl.formatMessage({ id: `testimonials.testimonialText${i}` }),
    });
  }

  const lastIndex = testimonials.length - 1;
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  const [slideIndex, setSlideIndex] = useState(randomIndex);

  const quoteMark = (
    <div className="relative">
      <div className="stylistic-quote-mark" aria-hidden="true">
        &ldquo;
      </div>
    </div>
  );

  const renderQuote = testimonial => {
    const { name, text } = testimonial;
    return (
      <div className="pl-14 relative text-xl italic bg-neutral-100 text-neutral-600 border-neutral-500">
        <div className="flex flex-col">
          <cite className="mb-4">{text}</cite>
          <p className="text-sm">{name}</p>
        </div>
      </div>
    );
  };

  const showPreviousSlide = () => {
    const newSlideIndex = slideIndex - 1;
    setSlideIndex(newSlideIndex < 0 ? lastIndex : newSlideIndex);
  };

  const showNextSlide = () => {
    const newSlideIndex = slideIndex + 1;
    setSlideIndex(newSlideIndex > lastIndex ? 0 : newSlideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextSlide();
    }, intervalTimeInMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [showNextSlide]);

  return (
    <section className={className} data-cy={dataCy}>
      <div className="flex m-auto min-h-testimonial-mobile sm:min-h-testimonial-desktop">
        {showArrows && (
          <button className="outline-none pr-8" onClick={showPreviousSlide}>
            <FaAngleLeft />
          </button>
        )}
        <div>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`${
                i === slideIndex
                  ? 'opacity-100 h-auto'
                  : 'h-0 opacity-0 overflow-hidden'
              } transition-opacity ease-linear duration-1000`}
            >
              {quoteMark}
              {renderQuote(t)}
            </div>
          ))}
        </div>

        {showArrows && (
          <button className="outline-none pl-8" onClick={showNextSlide}>
            <FaAngleRight />
          </button>
        )}
      </div>
      <br />

      <div className="flex justify-center">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            className={`outline-none mx-1 h-3 w-3 ${
              i === slideIndex ? 'bg-main-text' : 'bg-secondary'
            } rounded-full inline-block transition-colors hover:bg-main-text`}
            onClick={() => setSlideIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

TestimonialSlider.propTypes = {
  intl: PropTypes.object.isRequired,
  className: PropTypes.string,
  dataCy: PropTypes.string,
};

export default injectIntl(TestimonialSlider);
