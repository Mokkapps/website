import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { sendCustomAnalyticsEvent } from 'utils';

const EditOnGithub = ({ prefix, slug, isTip, className }) => {
  let url;

  if (isTip) {
    const slugWithoutTrailingSlash = slug.slice(0, -1);
    url = `https://github.com/Mokkapps/website/tree/master/src/content/tips${slugWithoutTrailingSlash}.mdx`;
  } else {
    const year = prefix.substring(0, 4);
    const slugWithoutLeadingSlash = slug.substring(1);
    url = `https://github.com/Mokkapps/website/tree/master/src/content/posts/${year}/${prefix}___${slugWithoutLeadingSlash}/index.md`;
  }

  return (
    <div
      className={`${className} flex bg-secondary flex-col p-4 border-l-2 border-accent`}
    >
      <p className="mb-4">
        <FormattedMessage id="blogPage.editOnGitHubInfoLine1" />
      </p>
      <p className="mb-4">
        <FormattedMessage id="blogPage.editOnGitHubInfoLine2" />
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="bg-none no-underline"
        href={url}
        onClick={() => sendCustomAnalyticsEvent(`Edit on GitHub: ${slug}`)}
      >
        <i
          title="Github"
          className="devicon-github-original mr-2 text-main-text"
        />
        <FormattedMessage id="blogPage.editOnGitHubButton" />
      </a>
    </div>
  );
};

EditOnGithub.propTypes = {
  prefix: PropTypes.string,
  className: PropTypes.string,
  isTip: PropTypes.bool,
  slug: PropTypes.string.isRequired,
};

export default EditOnGithub;
