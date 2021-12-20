import { SOCIAL_LINKS } from '../../src/components/SocialLink/SocialLinks';

describe('Footer Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('includes all fields', () => {
    cy.get('[data-cy=footer-newsletter-subscription]');

    cy.get('[data-cy=footer-social-links]')
      .children()
      .should('have.length', SOCIAL_LINKS.length);

    cy.get('[data-cy=footer-privacy-policy]').should(
      'have.attr',
      'href',
      '/privacy-policy'
    );
    cy.get('[data-cy=footer-legal-notice]').should(
      'have.attr',
      'href',
      '/legal-notice'
    );
    cy.get('[data-cy=footer-uses]').should('have.attr', 'href', '/uses');
    cy.get('[data-cy=footer-newsletter]').should(
      'have.attr',
      'href',
      '/newsletter'
    );
  });

  it('navigates to social link pages', () => {
    // GitHub
    let url = SOCIAL_LINKS.filter(link => link.icon === 'github').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-github]').should('have.attr', 'href', url[0]);

    // Twitter
    url = SOCIAL_LINKS.filter(link => link.icon === 'twitter').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-twitter]').should('have.attr', 'href', url[0]);

    // Dev.to
    url = SOCIAL_LINKS.filter(link => link.icon === 'devdotto').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-devdotto]').should(
      'have.attr',
      'href',
      url[0]
    );

    // LinkedIn
    url = SOCIAL_LINKS.filter(link => link.icon === 'linkedin').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-linkedin]').should(
      'have.attr',
      'href',
      url[0]
    );

    // Instagram
    url = SOCIAL_LINKS.filter(link => link.icon === 'instagram').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-instagram]').should(
      'have.attr',
      'href',
      url[0]
    );

    // Facebook
    url = SOCIAL_LINKS.filter(link => link.icon === 'facebook').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-facebook]').should(
      'have.attr',
      'href',
      url[0]
    );

    // RSS
    url = SOCIAL_LINKS.filter(link => link.icon === 'rss').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-rss]').should('have.attr', 'href', url[0]);

    //  Mail
    url = SOCIAL_LINKS.filter(link => link.icon === 'minutemailer').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-minutemailer]').should(
      'have.attr',
      'href',
      url[0]
    );
  });
});
