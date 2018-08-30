import React from 'react';
import TextLoop from 'react-text-loop';
import { navigate } from 'gatsby';

const headingStyle = {
  textAlign: 'center',
  fontSize: '3em',
};

const textStyles = {
  color: '#fc1a20',
};

export default () => (
  <h2 style={headingStyle}>
    Hi! I'm{' '}
    <TextLoop
      style={{ cursor: 'pointer' }}
      mask
      springConfig={{ stiffness: 180, damping: 8 }}
    >
      <span
        role="link"
        tabIndex={0}
        onKeyPress={() => {}}
        style={textStyles}
        onClick={() => navigate('./about')}
      >
        Michael Hoffmann
      </span>
      <span
        role="link"
        tabIndex={-1}
        onKeyPress={() => {}}
        style={textStyles}
        onClick={() => navigate('./about')}
      >
        Mokkapps
      </span>
    </TextLoop>
  </h2>
);
