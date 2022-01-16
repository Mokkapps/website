import React from 'react';
import PropTypes from 'prop-types';

import Reactions from 'components/Reactions';
import BuyMeACoffeeButton from 'components/BuyMeACoffeeButton';
import NewsletterSidebar from 'components/NewsletterSidebar';
import Share from 'components/Share';
import ToC from 'components/ToC';

const ArticleWithSidebar = ({ children, shareProps, slug, headings }) => (
  <section className="lg:grid lg:grid-col-1 lg:grid-cols-12 p-6 md:p-7 xl:p-4">
    <aside className="hidden xl:block xl:col-start-3 xl:col-end-3">
      <div className="sticky top-20 max-w-48">
        <Reactions slug={slug} />
      </div>
    </aside>
    <article className="m-auto lg:mx-0 lg:my-4 lg:col-start-2 lg:col-end-12 xl:col-start-4 xl:col-end-10">
      {children}
    </article>
    <aside className="hidden xl:pl-8 xl:block xl:col-start-11 xl:col-end-13">
      <div className="sticky top-20 max-w-48">
        {headings ? <ToC dataCy="table-of-contents" headings={headings} /> : null}
        <NewsletterSidebar className="mt-4" />
        <div data-cy="sidebar-share" className="flex justify-center mt-4">
          <div className="w-3/4">
            <Share
              className="flex justify-center"
              buttonClassName="mt-2"
              iconSize={36}
              shareProps={shareProps}
            />
          </div>
        </div>
        <BuyMeACoffeeButton className="mt-4" dataCy="sidebar-buy-me-a-coffee" />
      </div>
    </aside>
  </section>
);

ArticleWithSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  shareProps: PropTypes.object,
  headings: PropTypes.object,
  slug: PropTypes.string,
};

export default ArticleWithSidebar;
