import React from 'react';
import Footer from '@react-website-themes/default/components/Footer';
import { css } from 'emotion';

const style = css`
  .credits {
    display: none;
  }
`;

export default ({ link, copyright }) => (
  <Footer
    customStyle={style}
    links={link}
    copyright={copyright}
  />
);
