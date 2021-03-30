import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { capitalize } from '../../utils/helper';
import config from '../../content/meta/config';

const Author = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AuthorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoriesContainer = styled.section`
  margin: 1rem 0 1rem 0;
  display: flex;
`;

const CategorySpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 0.5rem;
`;

const iconStyle = {
  width: 15,
  height: 15,
};

const PostMeta = props => {
  const {
    prefix,
    timeToRead,
    categories,
    className,
    categoryLink = true,
    icons: {
      calendar: CalendarIcon,
      user: UserIcon,
      tag: TagIcon,
      read: ReadIcon,
    },
  } = props;

  return [
    <Author className={`mb-8 ${className}`} key="author">
      <StaticImage
        alt={config.baseName}
        className="rounded-full mr-4"
        layout="fixed"
        width={60}
        height={60}
        src="../../images/about.jpg"
      />
      <AuthorTextContainer>
        <span className="mb-2 flex items-center">
          {CalendarIcon && <UserIcon className="mr-2" style={iconStyle} />}{' '}
          Michael Hoffmann
        </span>
        <span className="flex items-center">
          {CalendarIcon && <CalendarIcon className="mr-2" style={iconStyle} />}{' '}
          {<FormattedDate value={prefix} />} |{' '}
          {ReadIcon && <ReadIcon className="ml-1 mr-2" style={iconStyle} />}{' '}
          {timeToRead} <FormattedMessage id="minuteRead" />
        </span>
      </AuthorTextContainer>
    </Author>,
    <CategoriesContainer key="categories-container">
      {categories &&
        categories.map(category => {
          const link = (
            <Link to={`/categories/${category}`}>{capitalize(category)}</Link>
          );
          const txt = <span key={category}>{capitalize(category)}</span>;

          return (
            <CategorySpan key={category}>
              {TagIcon && <TagIcon style={{ marginRight: '.25rem' }} />}
              {categoryLink ? link : txt}
            </CategorySpan>
          );
        })}
    </CategoriesContainer>,
  ];
};

PostMeta.propTypes = {
  prefix: PropTypes.string,
  categories: PropTypes.array,
  author: PropTypes.string,
  categoryLink: PropTypes.bool,
  icons: PropTypes.object,
};

export default PostMeta;
