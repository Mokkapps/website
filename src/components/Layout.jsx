import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';

import Layout from '@react-website-themes/default/components/Layout';

export default ({ children }) => (
  <Layout>
    <ScrollUpButton />
    {children}
  </Layout>
);
