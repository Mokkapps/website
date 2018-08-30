import React from 'react';

export default ({ text, ariaLabel, emoji }) => (
  <h2 style={{marginTop: '1rem'}}>
    <span role="img" aria-label={ariaLabel} style={{ marginRight: '.5em' }}>
      {emoji}
    </span>
    {text}
  </h2>
);
