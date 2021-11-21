import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const SimpleTipList = ({ items }) => {
  const yearTipMap = {};

  for (const item of items) {
    const {
      frontmatter: { date },
    } = item;

    const year = date.substring(0, 4);

    if (!yearTipMap[year]) {
      yearTipMap[year] = [item];
    } else {
      yearTipMap[year].push(item);
    }
  }

  const sortedYears = Object.keys(yearTipMap).sort(function (a, b) {
    return b.localeCompare(a);
  });

  return (
    <section
      className="flex flex-col justify-center"
      data-cy="minimal-tip-list-section"
    >
      {sortedYears.map((year, index) => {
        const tips = yearTipMap[year];
        return (
          <div key={year + index} className="flex flex-col my-4">
            <div className="flex items-center justify-between">
              <h2 className="">{year}</h2>
              <p className="italic mb-4">
                <FormattedMessage
                  id="minimalTipListPage.publishedTips"
                  values={{ amount: tips.length }}
                />
              </p>
            </div>
            <ul>
              {tips.map(post => {
                const {
                  frontmatter: { title, date },
                  fields: { slug },
                } = post;
                return (
                  <li key={slug}>
                    <Link to={`/tips${slug}`}>
                      {date}: {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

SimpleTipList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SimpleTipList;
