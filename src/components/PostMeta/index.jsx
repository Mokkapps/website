import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getFormattedDate } from '../../utils/helper';

const Author = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AuthorImg = styled(Img)`
  border-radius: 100%;
  margin-right: 0.5rem;
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
    authorImage,
    categoryLink = true,
    icons: {
      calendar: CalendarIcon,
      user: UserIcon,
      tag: TagIcon,
      read: ReadIcon,
    },
  } = props;

  return [
    <Author>
      <AuthorImg
        className="meta__author-icon"
        fixed={authorImage.childImageSharp.fixed}
      />
      <AuthorTextContainer>
        <span style={{ marginBottom: '.5rem' }}>
          {CalendarIcon && <UserIcon style={iconStyle} />} Michael Hoffmann
        </span>
        <span>
          {CalendarIcon && <CalendarIcon style={iconStyle} />}{' '}
          {getFormattedDate(prefix)} |{' '}
          {ReadIcon && <ReadIcon style={iconStyle} />} {timeToRead} min read
        </span>
      </AuthorTextContainer>
    </Author>,
    <CategoriesContainer>
      {categories &&
        categories.map(category => {
          const link = <Link to={`/categories/${category}`}>{category}</Link>;
          const txt = <span key={category}>{category}</span>;

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
