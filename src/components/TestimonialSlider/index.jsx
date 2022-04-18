import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import TestimonialCard from '../TestimonialCard';

const testimonialCount = 2;

const TestimonialSlider = ({ intl, className, dataCy }) => {
  const testimonials = [];

  for (let i = 1; i <= testimonialCount; i++) {
    testimonials.push({
      name: intl.formatMessage({ id: `testimonials.testimonialName${i}` }),
      text: intl.formatMessage({ id: `testimonials.testimonialText${i}` }),
      company: intl.formatMessage({
        id: `testimonials.testimonialCompany${i}`,
      }),
    });
  }

  return (
    <section className={className} data-cy={dataCy}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map(t => (
          <TestimonialCard
            key={t.name}
            name={t.name}
            text={t.text}
            company={t.company}
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
