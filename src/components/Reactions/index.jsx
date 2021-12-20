import PropTypes from 'prop-types';
import React from 'react';

import useArticleReactions from '@hooks/useArticleReactions';
import { formatNumber } from '@utils';

const Reactions = ({ slug, className }) => {
  const modifiedSlug = slug[0] === '/' ? slug.substring(1) : slug;
  const { hasClapped, reactions, handleIncrementClap, handleDecrementClap } =
    useArticleReactions(modifiedSlug);

  return (
    <div data-cy="reactions" className={`flex ${className}`}>
      <div
        role="button"
        tabIndex={0}
        onClick={
          hasClapped ? () => handleDecrementClap() : () => handleIncrementClap()
        }
        className={`${
          hasClapped ? 'bg-secondary' : 'bg-primary'
        } flex-1 py-4 rounded-md flex flex-col items-center`}
      >
        <span role="img" aria-label="clap" className="text-4xl">
          👏
        </span>
        <span className="text-xl font-semibold">
          {reactions ? formatNumber(reactions?.clap_count) : 0}
        </span>
        <span className="text-sm uppercase">CLAP</span>
      </div>
    </div>
  );
};

Reactions.propTypes = {
  slug: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Reactions;
