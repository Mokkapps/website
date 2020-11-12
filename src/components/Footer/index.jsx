import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  padding: 1em;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
  color: var(--text-main);
  margin: 1rem 0 1rem 0;
`;

const Footer = () => (
  <FooterWrapper>
    <SocialLinks data-cy="footer-social-links">
      {config.socialLinks.map(link => (
        <SocialLink link={link} key={link.id} />
      ))}
    </SocialLinks>

    <Content>
      <a
        href="https://github.com/Mokkapps/website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="built" />
      </a>{' '}
      <FormattedMessage id="with" /> &hearts; <FormattedMessage id="using" />{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby.js
      </a>{' '}
      |{' '}
      <Link data-cy="footer-privacy-policy" to="/privacy-policy">
        <FormattedMessage id="privacyPolicy" />
      </Link>{' '}
      |{' '}
      <Link data-cy="footer-legal-notice" to="/legal-notice">
        <FormattedMessage id="legalNotice" />
      </Link>
    </Content>
  </FooterWrapper>
);

export default Footer;
