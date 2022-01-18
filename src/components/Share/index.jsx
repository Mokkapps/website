import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

import { sendCustomAnalyticsEvent } from 'utils';

const Share = props => {
  const {
    className,
    buttonClassName,
    dataCy,
    shareProps: { url, text },
    iconSize = 48,
  } = props;

  const windowGlobal = typeof window !== 'undefined' && window;

  const sendAnalyticsEvent = () => {
    sendCustomAnalyticsEvent(
      `Article share dialog opened`
    );
  };

  return (
    <div data-cy={dataCy} className={`flex flex-wrap justify-center ${className}`}>
      <FacebookShareButton
        className={buttonClassName}
        beforeOnClick={() => sendAnalyticsEvent('Facebook')}
        url={url}
        quote={text}
      >
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <TwitterShareButton
        className={buttonClassName}
        beforeOnClick={() => sendAnalyticsEvent('Twitter')}
        url={url}
        title={text}
      >
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <TelegramShareButton
        className={buttonClassName}
        beforeOnClick={() => sendAnalyticsEvent('Telegram')}
        url={url}
        title={text}
      >
        <TelegramIcon size={iconSize} round />
      </TelegramShareButton>
      <WhatsappShareButton
        className={buttonClassName}
        beforeOnClick={() => sendAnalyticsEvent('Whatsapp')}
        url={url}
        title={text}
        separator=":: "
      >
        <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        className={buttonClassName}
        beforeOnClick={() => sendAnalyticsEvent('LinkedIn')}
        url={url}
      >
        <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>
      <PinterestShareButton
        className={buttonClassName}
        beforeOnClick={() => sendAnalyticsEvent('Pinterest')}
        url={url}
        media={`${String(windowGlobal?.location)}/image-share`}
      >
        <PinterestIcon size={iconSize} round />
      </PinterestShareButton>
      <RedditShareButton
        className={buttonClassName}
        beforeOnClick={() => sendAnalyticsEvent('Reddit')}
        url={url}
        title={text}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={iconSize} round />
      </RedditShareButton>
      <EmailShareButton
        className={buttonClassName}
        beforeOnClick={() => sendAnalyticsEvent('Email')}
        url={url}
        subject={text}
        body="body"
      >
        <EmailIcon size={iconSize} round />
      </EmailShareButton>
    </div>
  );
};

Share.propTypes = {
  shareProps: PropTypes.object,
  className: PropTypes.string,
  dataCy: PropTypes.string,
  buttonClassName: PropTypes.string,
  iconSize: PropTypes.number,
};

export default Share;
