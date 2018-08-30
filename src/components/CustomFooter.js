import React from 'react';
import Footer from '@react-website-themes/default/components/Footer';
import { css } from 'emotion';

const style = css`
  .credits {
    display: none;
  }

  p {
    color: white;
    font-size: 1.2em;
  }
`;

export default ({ copyright }) => (
  <Footer customStyle={style} copyright={copyright} />
);
