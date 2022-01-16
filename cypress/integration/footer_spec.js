describe('Footer Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('includes all fields', () => {
    cy.get('[data-cy=footer-newsletter-subscription]');

    cy.get('[data-cy=footer-social-links]')
      .children()
      .should('have.length',11);

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
    cy.get('[data-cy=social-link-github]').should('have.attr', 'href', 'https://github.com/mokkapps');

    // Twitter
    cy.get('[data-cy=social-link-twitter]').should('have.attr', 'href', 'https://twitter.com/mokkapps');

    // Dev.to
    cy.get('[data-cy=social-link-devto]').should(
      'have.attr',
      'href',
      'https://dev.to/mokkapps'
    );

    // LinkedIn
    cy.get('[data-cy=social-link-linkedin]').should(
      'have.attr',
      'href',
      'https://www.linkedin.com/in/mokkapps'
    );

    // Instagram
    cy.get('[data-cy=social-link-instagram]').should(
      'have.attr',
      'href',
      'https://www.instagram.com/mokkapps/'
    );

    // Facebook
    cy.get('[data-cy=social-link-facebook]').should(
      'have.attr',
      'href',
      'https://www.facebook.com/mokkapps-dev/'
    );

    // RSS
    cy.get('[data-cy=social-link-mokkappsrssfeed]').should('have.attr', 'href', 'https://mokkapps.de/rss.xml');

    //  Mail
    cy.get('[data-cy=social-link-sendemail]').should(
      'have.attr',
      'href',
      'mailto:mail@mokkapps.de'
    );
  });
});
