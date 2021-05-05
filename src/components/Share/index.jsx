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
  EmailIcon
} from 'react-share';

const PostShare = props => {
  const {
    shareProps: { url, text },
  } = props;

  const iconSize = 48;
  const windowGlobal = typeof window !== 'undefined' && window;

  return (
    <div className="flex flex-wrap justify-between my-10">
      <FacebookShareButton url={url} quote={text}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={text}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <TelegramShareButton
        url={url}
        title={text}
      >
        <TelegramIcon size={iconSize} round />
      </TelegramShareButton>
      <WhatsappShareButton
        url={url}
        title={text}
        separator=":: "
      >
        <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>
      <PinterestShareButton
        url={url}
        media={`${String(windowGlobal?.location)}/image-share`}
      >
        <PinterestIcon size={iconSize} round />
      </PinterestShareButton>
      <RedditShareButton
        url={url}
        title={text}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={iconSize} round />
      </RedditShareButton>
      <EmailShareButton
        url={url}
        subject={text}
        body="body"
      >
        <EmailIcon size={iconSize} round />
      </EmailShareButton>
    </div>
  );
};

PostShare.propTypes = {
  shareProps: PropTypes.object,
};

export default PostShare;
