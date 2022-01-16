describe('Newsletter Page Test', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'POST',
      url: 'https://myapi.eu-central-1.amazonaws.com/dev/newsletter/add-subscriber',
    }).as('apiCheck');

    cy.visit('/newsletter');
  });

  it('triggers sign up request', () => {
    cy.get('[data-cy=newsletter-email-input]').first().type('test@test.com');

    cy.get('[data-cy=newsletter-submit-button]').first().click();

    cy.wait('@apiCheck').then(interception => {
      assert.equal(
        interception.request.body,
        JSON.stringify({ email: 'test@test.com' })
      );
    });
  });

  it('should show past issues', function () {
    cy.get('[data-cy=newsletter-issues-list]')
      .children()
      .should('have.length.greaterThan', 20);
  });
});
