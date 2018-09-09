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
    <SocialLinks>
      {config.socialLinks.map(link => (
        <SocialLink key={link.url} href={link.url} iconName={link.icon} />
      ))}
    </SocialLinks>
    <Content>
      <a href="https://github.com/Mokkapps/website">Built</a> with &hearts;
      using <a href="https://www.gatsbyjs.org/">Gatsby.js</a> |{' '}
      <a href="privacy-policy">Privacy Policy</a> |{' '}
      <a href="legal-notice">Legal Notice</a>
    </Content>
  </Footer>
);
