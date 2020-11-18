import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import HireTheAuthor from '../HireTheAuthor';
import CategorySelection from '../CategorySelection';

const ArticleWithSidebar = ({ children, authorImage, categories }) => (
  <section className="lg:grid lg:grid-col-1 lg:grid-cols-12 p-6 md:p-7 xl:p-4">
    <div className="hidden lg:col-start-1 lg:col-end-2" />
    <article className="m-auto lg:col-start-3 lg:col-end-11 lg:m-0">
      {children}
    </article>
    <aside className="hidden lg:pl-8 lg:block lg:col-start-11 lg:col-end-13">
      <div className="sticky top-0 max-w-48">
        <h3 className="p-2 mb-0">
          <FormattedMessage id="hireTheAuthor" />
        </h3>
        <HireTheAuthor image={authorImage} />
        <div className="mt-3">
          <h3 className="p-2 mb-0">
            <FormattedMessage id="otherCategories" />
          </h3>
          <CategorySelection categories={categories} />
        </div>
      </div>
    </aside>
  </section>
);

ArticleWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  authorImage: PropTypes.object.isRequired,
  categories: PropTypes.array,
};

export default ArticleWithSidebar;
