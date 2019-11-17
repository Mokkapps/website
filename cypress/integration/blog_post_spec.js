describe('Blog Post Test', () => {
  beforeEach(() => {
    cy.visit('/blog');
    cy.get('[data-cy=blog-post-0]').click();
    cy.viewport('macbook-15')
  });

  it('show a sidebar with hire the author which redirect to contact page', () => {
    cy.viewport('macbook-15')
    cy.get('[data-cy=hire-the-author]').click();
    cy.url().should('include', '/contact');
  });

  it('show a list of available categories', () => {
    cy.get('[data-cy=blog-categories]');
  });

  it('does not show sidebar on mobile', () => {
    cy.viewport('iphone-6')
    cy.get('[data-cy=hire-the-author]').should('not.be.visible');
  });
});
