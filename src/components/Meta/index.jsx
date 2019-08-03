import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedDate } from 'react-intl';

const MetaText = styled.p`
  font-size: 0.9em;
  display: flex;
  margin: 0.5em 0 1em;

  flex-wrap: wrap;

  & span {
    display: flex;
    align-items: center;
    line-height: 1;
    padding-right: 10px;
  }

  & svg {
    margin: 2px 5px 0 0;
    width: 16px;
    height: 16px;
  }
`;

const Meta = props => {
  const {
    prefix,
    categories,
    author,
    categoryLink = true,
    icons: { calendar: CalendarIcon, user: UserIcon, tag: TagIcon },
  } = props;

  return (
    <MetaText>
      <span>
        {CalendarIcon && <CalendarIcon />} {<FormattedDate value={prefix} />}
      </span>
      <span>
        {UserIcon && <UserIcon />} {author}
      </span>
      {categories &&
        categories.map(category => {
          const link = <Link to={`/categories/${category}`}>{category}</Link>;
          const txt = <span key={category}>{category}</span>;

          return (
            <span key={category}>
              {TagIcon && <TagIcon />}
              {categoryLink ? link : txt}
            </span>
          );
        })}
    </MetaText>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string,
  categories: PropTypes.array,
  author: PropTypes.string,
  categoryLink: PropTypes.bool,
  icons: PropTypes.object,
};

export default Meta;
