import { SOCIAL_LINKS } from '../../src/components/SocialLink/SocialLinks';

describe('Footer Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('includes the social links', () => {
    cy.get('[data-cy=footer-social-links]')
      .children()
      .should('have.length', SOCIAL_LINKS.length);
    cy.get('[data-cy=social-link-twitter]');
    cy.get('[data-cy=social-link-dev-dot-to]');
    cy.get('[data-cy=social-link-linkedin]');
    cy.get('[data-cy=social-link-instagram]');
    cy.get('[data-cy=social-link-facebook]');
    cy.get('[data-cy=social-link-hashnode]');
    cy.get('[data-cy=social-link-rss]');
    cy.get('[data-cy=social-link-npm]');
    cy.get('[data-cy=social-link-minutemailer]');
  });

  it('shows a newsletter button', () => {
    cy.get('[data-cy=footer-newsletter-button]')
      .find('a')
      .should('have.attr', 'href', '/newsletter');
  });

  it('includes link to privacy policy and legal notice', () => {
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
  });

  it('navigates to github page', () => {
    const url = SOCIAL_LINKS.filter(link => link.icon === 'github').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-github]').should('have.attr', 'href', url[0]);
  });

  it('navigates to twitter page', () => {
    const url = SOCIAL_LINKS.filter(link => link.icon === 'twitter').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-twitter]').should('have.attr', 'href', url[0]);
  });

  it('navigates to dev.to page', () => {
    const url = SOCIAL_LINKS.filter(link => link.icon === 'dev-dot-to').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-dev-dot-to]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to linkedin page', () => {
    const url = SOCIAL_LINKS.filter(link => link.icon === 'linkedin').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-linkedin]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to instagram page', () => {
    const url = SOCIAL_LINKS.filter(link => link.icon === 'instagram').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-instagram]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to facebook page', () => {
    const url = SOCIAL_LINKS.filter(link => link.icon === 'facebook').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-facebook]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to RSS feed', () => {
    const url = SOCIAL_LINKS.filter(link => link.icon === 'rss').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-rss]').should('have.attr', 'href', url[0]);
  });

  it('navigates to send mail', () => {
    const url = SOCIAL_LINKS.filter(link => link.icon === 'minutemailer').map(
      link => link.url
    );
    cy.get('[data-cy=social-link-minutemailer]').should(
      'have.attr',
      'href',
      url[0]
    );
  });
});
