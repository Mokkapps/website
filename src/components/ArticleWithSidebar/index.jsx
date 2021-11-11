import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import HireTheAuthor from '../HireTheAuthor';
import CategorySelection from '../CategorySelection';
import BuyMeACoffeeButton from '../BuyMeACoffeeButton';
import NewsletterButton from '../NewsletterButton';

const ArticleWithSidebar = ({ children, categories = [] }) => (
  <section className="lg:grid lg:grid-col-1 lg:grid-cols-12 p-6 md:p-7 xl:p-4">
    <div className="hidden lg:col-start-1 lg:col-end-2 xl:col-start-1 xl:col-end-3" />
    <article className="m-auto lg:mx-0 lg:my-4 lg:col-start-2 lg:col-end-12 xl:col-start-4 xl:col-end-10">
      {children}
    </article>
    <aside className="hidden xl:pl-8 xl:block xl:col-start-11 xl:col-end-13 xl:col-start-11 xxl:col-end-13">
      <div className="sticky top-20 max-w-48">
        <HireTheAuthor />
        <BuyMeACoffeeButton className="my-4" />
        <NewsletterButton className="my-4" />
        {categories.length > 0 ? (
          <div className="mt-3">
            <h3 className="p-2 mb-0">
              <FormattedMessage id="categoriesPage.otherCategories" />
            </h3>
            <CategorySelection categories={categories} />
          </div>
        ) : null}
      </div>
    </aside>
  </section>
);

ArticleWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.array,
};

export default ArticleWithSidebar;
