import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import { useIsArticleRead } from 'hooks/useIsArticleRead';
import { handleArticleClicked, getFormattedDate } from 'utils';

const LinkCard = ({
  to,
  slug,
  dataCy,
  cover,
  title,
  date,
  className,
}) => {
  const [hasRead] = useIsArticleRead(slug);

  return (
    <Link
      className={`flex flex-col justify-start items-center cursor-pointer rounded-md bg-none bg-secondary shadow-md ${className}`}
      to={to}
      data-cy={dataCy}
      onClick={() => handleArticleClicked(slug)}
    >
      <GatsbyImage
        image={cover.childImageSharp.gatsbyImageData}
        alt={`${title} Image`}
        className="rounded-t-md"
      />
      <div className="flex flex-col flex-grow justify-between p-4 w-full">
        <span className="text-xl text-main-text font-bold">{title}</span>
        <div className="flex justify-between items-center mt-4">
          {date ? (
            <p className="flex flex-col flex-wrap text-secondary-text text-s bold">
              {getFormattedDate(date)}
            </p>
          ) : null}

          {hasRead && slug ? (
            <div className="flex items-center text-success">
              <FaCheck className="mr-1" />
              <FormattedMessage id="general.read" />
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

LinkCard.propTypes = {
  cover: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  dataCy: PropTypes.string.isRequired,
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkCard;
