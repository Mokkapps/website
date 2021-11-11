describe('404 Page Test', () => {
  beforeEach(() => {
    cy.visit('/any-test-url', { failOnStatusCode: false });

    // click preview custom 404 page in development mode
    cy.contains('Preview custom 404 page').click();
  });

  it('shows custom 404 page', () => {
    cy.get('h1').should('contain', '404');
    cy.get('h2').should('be.visible');
    cy.get('img').should('be.visible');
  });
});
