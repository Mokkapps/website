import React from 'react';
import PropTypes from 'prop-types';

import { generateVueTipImageUrl } from 'utils';
import LinkCard from 'components/LinkCard';

const TipsList = props => {
  const { items, onlyTwoCols = false } = props;
  let count = 0;

  return (
    <div
      className={`w-100 ${
        onlyTwoCols
          ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
          : 'grid grid-cols-1 md:grid-cols-3 gap-12'
      } `}
      data-cy="tips-list"
    >
      {items.map(item => {
        const {
          frontmatter: { title, date },
          fields: { slug },
        } = item;

        const coverUrl = generateVueTipImageUrl(slug);

        const component = (
          <LinkCard
            key={slug}
            slug={slug}
            coverUrl={coverUrl}
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
