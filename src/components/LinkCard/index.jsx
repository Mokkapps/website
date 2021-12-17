import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { getFormattedDate } from '../../utils/helper';

const LinkCard = props => {
  const { to, dataCy, cover, title, date, className } = props;

  return (
    <Link
      className={`flex flex-col justify-start items-center cursor-pointer rounded-md bg-none bg-secondary shadow-md p-4 ${className}`}
      to={to}
      data-cy={dataCy}
    >
      <GatsbyImage
        image={cover.childImageSharp.gatsbyImageData}
        alt={`${title} Image`}
        className="mb-4"
      />
      <div className="w-full">
        <h3 className="text-main-text">{title}</h3>
        {date ? (
          <p className="flex flex-col flex-wrap text-secondary-text text-s bold">
            {getFormattedDate(date)}
          </p>
        ) : null}
      </div>
    </Link>
  );
};

LinkCard.propTypes = {
  cover: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  dataCy: PropTypes.string.isRequired,
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkCard;
