describe('404 Page Test', () => {
  beforeEach(() => {
    cy.visit('/any-test-url');

    // click preview custom 404 page in development mode
    cy.get('button').click();
  });

  it('shows custom 404 page', () => {
    cy.get('h1').should('contain', '404');
    cy.get('h2').should('be.visible');
    cy.get('img').should('be.visible');
  });
});
