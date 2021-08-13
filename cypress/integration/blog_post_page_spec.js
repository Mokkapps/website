describe('Blog Post Test', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
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

  it('does not show sidebar on mobile', () => {
    cy.viewport('iphone-6')
    cy.get('[data-cy=hire-the-author]').should('not.be.visible');
  });
});
