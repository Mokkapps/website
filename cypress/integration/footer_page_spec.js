import config from '../../src/content/meta/config';

describe('Footer Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('includes the social links', () => {
    cy.get('[data-cy=footer-social-links]')
      .children()
      .should('have.length', 4);
    cy.get('[data-cy=social-link-twitter]');
    cy.get('[data-cy=social-link-dev-dot-to]');
    cy.get('[data-cy=social-link-linkedin]');
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
});
