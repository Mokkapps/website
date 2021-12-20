import React from 'react';
import PropTypes from 'prop-types';

import LinkCard from '../LinkCard';

const TipsList = props => {
  const { items, onlyTwoCols = false } = props;
  let count = 0;

  return (
    <div
      className={`w-100 ${
        onlyTwoCols
          ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
          : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'
      } `}
      data-cy="tips-list"
    >
      {items.map(item => {
        const {
          frontmatter: { title, cover, date },
          fields: { slug },
        } = item;

        const component = (
          <LinkCard
            key={slug}
            slug={slug}
            cover={cover}
            dataCy={`tip-${count}`}
            date={date}
            to={`/tips${slug}`}
            title={title}
          />
        );

        count++;

        return component;
      })}
    </div>
  );
};

TipsList.propTypes = {
  items: PropTypes.array.isRequired,
  onlyTwoCols: PropTypes.bool,
};

export default TipsList;
