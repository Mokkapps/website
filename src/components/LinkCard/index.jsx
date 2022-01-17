import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useIsArticleRead } from 'hooks/useIsArticleRead';
import { handleArticleClicked, getFormattedDate } from 'utils';

const LinkCard = ({
  to,
  slug,
  dataCy,
  cover,
  coverUrl,
  title,
  date,
  className,
  externalLink = false,
}) => {
  const [hasRead] = useIsArticleRead(slug);

  const innerContent = (
    <>
      {coverUrl ? (
        <LazyLoadImage src={coverUrl} alt={`${title} Image`} width={'100%'} />
      ) : null}
      {cover ? (
        <GatsbyImage
          image={cover.childImageSharp.gatsbyImageData}
          alt={`${title} Image`}
          className="rounded-t-md"
        />
      ) : null}
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
    </>
  );

  const linkClassName = `flex flex-col justify-start items-center cursor-pointer no-underline rounded-md bg-none bg-secondary shadow-md ${className}`;

  return externalLink ? (
    <a
      className={linkClassName}
      href={to}
      rel="noreferrer"
      target="_blank"
      data-cy={dataCy}
      onClick={() => handleArticleClicked(slug)}
    >
      {innerContent}
    </a>
  ) : (
    <Link
      className={linkClassName}
      to={to}
      data-cy={dataCy}
      onClick={() => handleArticleClicked(slug)}
    >
      {innerContent}
    </Link>
  );
};

LinkCard.propTypes = {
  to: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  dataCy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.object,
  coverUrl: PropTypes.string,
  date: PropTypes.string,
  className: PropTypes.string,
  externalLink: PropTypes.bool,
};

export default LinkCard;
