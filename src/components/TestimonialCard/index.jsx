import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ text, name, company }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-secondary rounded-md p-4">
      <p className="text-secondary-text text-center italic">{text}</p>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-4 font-bold text-center">{name}</p>
        <p className="mt-1 text-xs text-center">{company}</p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default TestimonialCard;
