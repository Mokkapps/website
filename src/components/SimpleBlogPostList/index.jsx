import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const SimpleBlogPostList = props => {
  const { items } = props;

  const yearPostMap = {};

  for (const item of items) {
    const {
      fields: { prefix },
    } = item;

    const year = prefix.substring(0, 4);

    if (!yearPostMap[year]) {
      yearPostMap[year] = [item];
    } else {
      yearPostMap[year].push(item);
    }
  }

  const sortedYears = Object.keys(yearPostMap).sort(function (a, b) {
    return b.localeCompare(a);
  });

  return (
    <section className="flex flex-col justify-center" data-cy="minimal-blog-list-section">
      {sortedYears.map((year, index) => {
        const posts = yearPostMap[year];
        return (
          <div key={year + index} className="flex flex-col my-4">
            <div className="flex items-center justify-between">
              <h2 className="">{year}</h2>
              <p className="italic mb-4">
                <FormattedMessage
                  id="minimalBlogListPage.publishedPosts"
                  values={{ amount: posts.length }}
                />
              </p>
            </div>
            <ul>
              {posts.map(post => {
                const {
                  frontmatter: { title },
                  fields: { slug, prefix },
                } = post;
                return (
                  <li key={slug}>
                    <Link to={`/blog${slug}`}>
                      {prefix}: {title}
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

SimpleBlogPostList.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  metaIcons: PropTypes.object,
};

export default SimpleBlogPostList;
