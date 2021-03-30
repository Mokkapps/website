import config from '../../src/content/meta/config';

describe('Footer Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('includes the social links', () => {
    cy.get('[data-cy=footer-social-links]')
      .children()
      .should('have.length', 9);
    cy.get('[data-cy=social-link-twitter]');
    cy.get('[data-cy=social-link-dev-dot-to]');
    cy.get('[data-cy=social-link-linkedin]');
    cy.get('[data-cy=social-link-instagram]');
    cy.get('[data-cy=social-link-facebook]');
    cy.get('[data-cy=social-link-hashnode]');
    cy.get('[data-cy=social-link-rss]');
    cy.get('[data-cy=social-link-minutemailer]');
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
    const url = config.socialLinks
      .filter(link => link.id === 'github')
      .map(link => link.url);
    cy.get('[data-cy=social-link-github]').should('have.attr', 'href', url[0]);
  });

  it('navigates to twitter page', () => {
    const url = config.socialLinks
      .filter(link => link.id === 'twitter')
      .map(link => link.url);
    cy.get('[data-cy=social-link-twitter]').should('have.attr', 'href', url[0]);
  });

  it('navigates to dev.to page', () => {
    const url = config.socialLinks
      .filter(link => link.id === 'dev.to')
      .map(link => link.url);
    cy.get('[data-cy=social-link-dev-dot-to]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to linkedin page', () => {
    const url = config.socialLinks
      .filter(link => link.id === 'linkedin')
      .map(link => link.url);
    cy.get('[data-cy=social-link-linkedin]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to instagram page', () => {
    const url = config.socialLinks
      .filter(link => link.id === 'instagram')
      .map(link => link.url);
    cy.get('[data-cy=social-link-instagram]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to facebook page', () => {
    const url = config.socialLinks
      .filter(link => link.id === 'facebook')
      .map(link => link.url);
    cy.get('[data-cy=social-link-facebook]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to RSS feed', () => {
    const url = config.socialLinks
      .filter(link => link.id === 'rss')
      .map(link => link.url);
    cy.get('[data-cy=social-link-rss]').should(
      'have.attr',
      'href',
      url[0]
    );
  });

  it('navigates to send mail', () => {
    const url = config.socialLinks
      .filter(link => link.id === 'mail')
      .map(link => link.url);
    cy.get('[data-cy=social-link-minutemailer]').should(
      'have.attr',
      'href',
      url[0]
    );
  });
});
