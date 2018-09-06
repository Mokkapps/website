import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { getFormattedDate } from '../../utils/helper';

import './PostMeta.scss';

const PostMeta = props => {
  const {
    prefix,
    timeToRead,
    categories,
    authorImage,
    categoryLink = true,
    icons: {
      calendar: CalendarIcon,
      user: UserIcon,
      tag: TagIcon,
      read: ReadIcon,
    },
  } = props;

  return (
    <div>
      <div className="meta__author">
        <Img
          className="meta__author-icon"
          fixed={authorImage.childImageSharp.fixed}
        />
        <div className="meta__author-text">
          <span style={{ marginBottom: '.5rem' }}>
            {CalendarIcon && <UserIcon style={{ width: 15, height: 15 }} />}{' '}
            Michael Hoffmann
          </span>
          <span>
            {CalendarIcon && <CalendarIcon style={{ width: 15, height: 15 }} />}{' '}
            {getFormattedDate(prefix)} |{' '}
            {ReadIcon && <ReadIcon style={{ width: 15, height: 15 }} />}{' '}
            {timeToRead} min read
          </span>
        </div>
      </div>
      <div className="meta__categories">
        {categories &&
          categories.map(category => {
            const link = (
              <Link key={category} to={`/categories/${category}`}>
                {category}
              </Link>
            );
            const txt = <span key={category}>{category}</span>;

            return (
              <span className="meta__category">
                {TagIcon && <TagIcon style={{ marginRight: '.25rem' }} />}
                {categoryLink ? link : txt}
              </span>
            );
          })}
      </div>
    </div>
  );
};

PostMeta.propTypes = {
  customStyle: PropTypes.string,
  prefix: PropTypes.string,
  categories: PropTypes.array,
  author: PropTypes.string,
  categoryLink: PropTypes.bool,
  icons: PropTypes.object,
};

export default PostMeta;
