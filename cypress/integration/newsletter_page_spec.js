describe('Newsletter Page Test', () => {
  beforeEach(() => {
    cy.visit('/newsletter');
  });

  it('includes a form and archive link', () => {
    cy.get('form').then($form => {
      expect($form[0].action).to.include(
        'https://www.getrevue.co/profile/mokkapps/add_subscriber'
      );
    });

    cy.get('[data-cy=newsletter-email-input]');
    cy.get('[data-cy=newsletter-first-name-input]');
    cy.get('[data-cy=newsletter-last-name-input]');
    cy.get('[data-cy=newsletter-submit-input]');

    cy.get('[data-cy=newsletter-archive-link-button');
  });
});
