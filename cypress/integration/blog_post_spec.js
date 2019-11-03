describe('Blog Post Test', () => {
  beforeEach(() => {
    cy.visit('/blog');
    cy.get('[data-cy=blog-post-0]').click();
  });

  it('show a sidebar with hire the author which redirect to contact page', () => {
    cy.get('[data-cy=hire-the-author]').click();
    cy.url().should('include', '/contact');
  });

  it('show a list of available categories', () => {
    cy.get('[data-cy=blog-categories]');
  });
});
