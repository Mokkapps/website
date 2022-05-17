import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

import Dialog from 'components/Dialog';
import Button from 'components/Button';
import { sendCustomAnalyticsEvent } from "../../utils";

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
        <ul>
          <li>Free eBook, 1th edition</li>
          <li>40+ pages</li>
          <li>4400+ words</li>
          <li>Includes code examples & playground links</li>
          <li>Available as PDF, ePub (Android and iOS) and Mobi (Kindle)</li>
        </ul>
        <Button className="my-8"
          onClick={() => {
            sendCustomAnalyticsEvent('Clicked get free eBook');
            navigate('/ebook/27-helpful-tips-for-vue-developers');
            props.onClose();
          }}
        >
          Get It For Free!
        </Button>
        <a className="text-xs cursor-pointer" onClick={() => props.doNotShowAgain()}>Do not show again</a>
      </div>
    </Dialog>
  );
}

export default EbookDialog;
