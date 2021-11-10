import React from 'react';
import PropTypes from 'prop-types';

import Tip from '../Tip';

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
      {items.map((item, index) => {
        const {
          frontmatter: { title, cover },
          fields: { slug },
        } = item;

        const component = (
          <Tip key={slug} id={count} title={title} slug={slug} cover={cover} />
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
