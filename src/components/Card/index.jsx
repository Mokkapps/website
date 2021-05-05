import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, url, id }) => (
  <a
    className="flex flex-col bg-none shadow-md bg-secondary rounded-md m-2 max-w-full w-64"
    data-cy={`card-${id}`}
    href={url}
  >
    {children}
  </a>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default Card;
