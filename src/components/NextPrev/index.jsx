import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FormattedDate } from 'react-intl';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & svg {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    flex-shrink: 0;
  }

  & a {
    background-image: none;
  }

  & .next,
  & .prev {
    display: flex;
    flex-basis: 46%;
  }

  & .next {
    flex-direction: row-reverse;
    text-align: right;
  }

  & time {
    display: block;
    font-size: 0.9em;
    color: var(--lightTextColor);
    margin-top: 5px;
  }
`;

const NextPrev = props => {
  const {
    className,
    icons: { next: NextIcon, prev: PrevIcon },
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {},
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {},
    } = {},
  } = props;

  return (
    <Container className={`${className}`}>
      {prevSlug && (
        <Link to={`/blog${prevSlug}`} className="prev">
          {PrevIcon && <PrevIcon />}
          <p>
            {prevTitle} <time>{<FormattedDate value={prevPrefix} />}</time>
          </p>
        </Link>
      )}
      {nextSlug && (
        <Link to={`/blog${nextSlug}`} className="next">
          {NextIcon && <NextIcon />}
          <p>
            {nextTitle} <time>{<FormattedDate value={nextPrefix} />} </time>
          </p>
        </Link>
      )}
    </Container>
  );
};

NextPrev.propTypes = {
  className: PropTypes.string,
  next: PropTypes.object,
  prev: PropTypes.object,
  icons: PropTypes.object,
};

export default NextPrev;
