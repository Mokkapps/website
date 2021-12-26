import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { sendCustomAnalyticsEvent } from 'utils';
import LinkCard from 'components/LinkCard';

const SimilarArticles = ({ className, categories, slug, count = 4 }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      posts: allMdx(
        filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
        sort: { fields: [fields___prefix], order: DESC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            fields {
              slug
              prefix
            }
            frontmatter {
              title
              categories
              cover {
                childImageSharp {
                  gatsbyImageData(
                    height: 700
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const nodes = data.posts.edges
    .map(e => e.node)
    .filter(node => node.fields.slug !== slug);

  const identityMap = {};
  nodes.forEach(node => {
    let points = 0;

    node.frontmatter.categories.forEach(category => {
      if (categories.includes(category)) {
        points += 1;
      }
    });

    identityMap[node.fields.slug] = {
      article: node,
      points,
    };
  });

  const similarArticles = Object.values(identityMap)
    .sort((a, b) => b.points - a.points)
    .map(value => {
      const node = value.article;
      return {
        date: node.fields.prefix,
        slug: node.fields.slug,
        cover: node.frontmatter.cover,
        title: node.frontmatter.title,
        to: `/blog${slug}`,
      };
    })
    .slice(0, count);

  return (
    <div data-cy="similar-articles" className={`${className} flex flex-col`}>
      <div className="flex flex-col">
        <span className="bold text-xl">
          <FormattedMessage id="blogPage.similarArticlesLine1" />
        </span>{' '}
        <span className="bold text-xl text-secondary-text">
          <FormattedMessage id="blogPage.similarArticlesLine2" />
        </span>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {similarArticles.map(
          ({ slug: articleSlug, cover, title, to, date }, index) => (
            <LinkCard
              key={articleSlug}
              slug={articleSlug}
              cover={cover}
              dataCy={`similar-article-${index}`}
              title={title}
              to={to}
              date={date}
              onClick={() =>
                sendCustomAnalyticsEvent('Clicked similar article link')
              }
            />
          )
        )}
      </section>
    </div>
  );
};

SimilarArticles.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string,
  articleType: PropTypes.string,
  count: PropTypes.number,
  className: PropTypes.string,
};

export default SimilarArticles;
