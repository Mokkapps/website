describe('Contact Page Test', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('includes a contact form', () => {
    cy.get('form').then($form => {
      expect($form[0].action).to.include('/success');
    });

    cy.get('[data-cy=contact-name]');
    cy.get('[data-cy=contact-email]');
    cy.get('[data-cy=contact-message]');
    cy.get('[data-cy=contact-about-me-button]');
  });
});
