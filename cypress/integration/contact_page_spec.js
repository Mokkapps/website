describe('Contact Page Test', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('includes all fields', () => {
    cy.get('[data-cy=contact-name]');
    cy.get('[data-cy=contact-email]');
    cy.get('[data-cy=contact-message]');
    cy.get('[data-cy=contact-about-me-button]');

    cy.get('[data-cy=contact-availability');
    cy.get('[data-cy=contact-hire-me-button');
  })

  it('redirects to /success if form is submitted', () => {
    cy.get('form').then($form => {
      expect($form[0].action).to.include('/success');
    });
  });
});
