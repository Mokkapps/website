import React from 'react';
import styled from 'styled-components';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';

const Footer = styled.footer`
  flex-shrink: 0;
  height: 4em;
  padding: 1em;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  margin: 1rem 0 1rem 0;
`;

export default () => (
  <Footer>
    <SocialLinks data-cy="footer-social-links">
      {config.socialLinks.map(link => (
        <SocialLink key={link.url} href={link.url} iconName={link.icon} />
      ))}
    </SocialLinks>
    <Content>
      <a href="https://github.com/Mokkapps/website">Built</a> with &hearts;
      using <a href="https://www.gatsbyjs.org/">Gatsby.js</a> |{' '}
      <a data-cy="footer-privacy-policy" href="/privacy-policy">
        Privacy Policy
      </a>{' '}
      |{' '}
      <a data-cy="footer-legal-notice" href="/legal-notice">
        Legal Notice
      </a>
    </Content>
  </Footer>
);
