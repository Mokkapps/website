import React from 'react';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';
import NewsletterSubscription from '../NewsletterSubscription';

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  height: 16em;
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

const Newsletter = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = ({ hideNewsletter }) => (
  <FooterWrapper>
    {hideNewsletter ? null : (
      <Margin bottom="3">
        <Newsletter>
          <NewsletterSubscription />
        </Newsletter>
      </Margin>
    )}

    <SocialLinks data-cy="footer-social-links">
      {config.socialLinks.map(link => (
        <SocialLink key={link.url} href={link.url} iconName={link.icon} />
      ))}
    </SocialLinks>

    <Content>
      <a href="https://github.com/Mokkapps/website" target="_blank" rel="noopener noreferrer">
        <FormattedMessage id="built" />
      </a>{' '}
      <FormattedMessage id="with" /> &hearts; <FormattedMessage id="using" />{' '}
      <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby.js</a> |{' '}
      <a data-cy="footer-privacy-policy" href="/privacy-policy" >
        <FormattedMessage id="privacyPolicy" />
      </a>{' '}
      |{' '}
      <a data-cy="footer-legal-notice" href="/legal-notice">
        <FormattedMessage id="legalNotice" />
      </a>
    </Content>
  </FooterWrapper>
);

Footer.propTypes = {
  hideNewsletter: PropTypes.boolean,
};

export default Footer;
