import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

import Dialog from 'components/Dialog';
import NewsletterSubscription from 'components/NewsletterSubscription';
import Button from '../Button';

EbookDialog.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  onClose: PropTypes.func,
  doNotShowAgain: PropTypes.func,
};

function EbookDialog(props) {
  return (
    <Dialog
      show={props.show}
      title={'Free eBook: Bring your Vue skills to the next level!'}
      onClose={() => props.onClose()}
    >
      <div className="flex flex-col items-center">
        <StaticImage
          src={
            '../../content/pages/ebook/27-helpful-tips-for-vue-developers/images/ebook-cover.png'
          }
          alt="eBook Cover"
          height={400}
        />
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 my-12">
          <div className="flex flex-col">
            <span className="bold text-3xl text-secondary-text">
              Get It For Free!
            </span>
            <span className="mt-4">
              Subscribe to my newsletter to get your free copy of this eBook as
              a welcome present!
            </span>
          </div>
          <NewsletterSubscription />
        </div>
        <Button onClick={() => props.doNotShowAgain()}>Don't show again</Button>
      </div>
    </Dialog>
  );
}

export default EbookDialog;
