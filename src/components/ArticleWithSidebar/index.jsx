import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { FaDownload } from 'react-icons/fa';

import Reactions from 'components/Reactions';
import BuyMeACoffeeButton from 'components/BuyMeACoffeeButton';
import NewsletterSidebar from 'components/NewsletterSidebar';
import Share from 'components/Share';
import ToC from 'components/ToC';
import Ad from 'components/Ad';
import { sendCustomAnalyticsEvent } from 'utils';
import NewsletterSubscription from "../NewsletterSubscription";

const ArticleWithSidebar = ({ children, shareProps, slug, headings }) => (
  <section className="lg:grid lg:grid-col-1 lg:grid-cols-12 p-6 md:p-7 xl:p-4">
    <aside className="hidden xl:block xl:col-start-1 xl:col-end-1">
      <div className="sticky top-20">
        <Reactions slug={slug} />
        <Share
          data-cy="sidebar-share"
          buttonClassName="p-1"
          iconSize={40}
          shareProps={shareProps}
        />
        <div className="flex justify-center mt-4">
          <Ad />
        </div>
      </div>
    </aside>
    <article className="m-auto lg:mx-0 lg:my-4 lg:col-start-2 lg:col-end-12 xl:col-start-3 xl:col-end-10">
      {children}
    </article>
    <aside className="hidden xl:pl-8 xl:block xl:col-start-11 xl:col-end-13">
      <div className="sticky top-20">
        {headings ? (
          <ToC dataCy="table-of-contents" headings={headings} />
        ) : null}
        <NewsletterSubscription
          className="mt-4"
          dataCy="newsletter-subscription-sidebar"
          minimal
        />
        <Link
          to="/ebook/27-helpful-tips-for-vue-developers"
          className="flex justify-center items-center rounded-lg no-underline px-4 bg-primary h-12 mt-4"
          onClick={() =>
            sendCustomAnalyticsEvent('Free eBook sidebar button clicked')
          }
        >
          <span className="mr-2 text-xl" role="img" aria-label="Download Icon">
            <FaDownload />
          </span>
          <span className="text-l font-bold flex text-main-text">
            <FormattedMessage id="general.freeVueEbook" />
          </span>
        </Link>
        <BuyMeACoffeeButton className="mt-2" dataCy="sidebar-buy-me-a-coffee" />
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
