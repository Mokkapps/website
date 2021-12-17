import React from 'react';
import PropTypes from 'prop-types';

import HireTheAuthor from '../HireTheAuthor';
import BuyMeACoffeeButton from '../BuyMeACoffeeButton';
import NewsletterSidebar from '../NewsletterSidebar';
import Share from '../Share';

const ArticleWithSidebar = ({ children, shareProps }) => (
  <section className="lg:grid lg:grid-col-1 lg:grid-cols-12 p-6 md:p-7 xl:p-4">
    <div className="hidden lg:col-start-1 lg:col-end-2 xl:col-start-1 xl:col-end-3" />
    <article className="m-auto lg:mx-0 lg:my-4 lg:col-start-2 lg:col-end-12 xl:col-start-4 xl:col-end-10">
      {children}
    </article>
    <aside className="hidden xl:pl-8 xl:block xl:col-start-11 xl:col-end-13 xl:col-start-11 xxl:col-end-13">
      <div className="sticky top-20 max-w-48">
        <HireTheAuthor />
        <NewsletterSidebar className="mt-4" />
        <div className="flex justify-center mt-4">
          <div className="w-3/4">
            <Share
              className="flex justify-center"
              buttonClassName="mt-2"
              iconSize={36}
              shareProps={shareProps}
            />
          </div>
        </div>
        <BuyMeACoffeeButton className="mt-4" />
      </div>
    </aside>
  </section>
);

ArticleWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  shareProps: PropTypes.object,
};

export default ArticleWithSidebar;
