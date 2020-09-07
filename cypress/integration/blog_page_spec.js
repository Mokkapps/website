describe('Blog Page Test', () => {
  beforeEach(() => {
    cy.visit('/blog');
  });

  it('shows a list of categories, blogs and a pagination', () => {
    cy.get('[data-cy=blog-categories]');

    cy.get('[data-cy=blog-post-list]')
      .children()
      .should('have.length', 30);
  });

  it('shows category page if a category is clicked', () => {
    cy.get('[data-cy=blog-category-development]').click();
    cy.url().should('include', '/categories/development');
  });

  it('shows blog post page if a blog post is clicked', () => {
    cy.get('[data-cy=blog-post-0]').then($anchor => {
      const href = $anchor[0].href;

      cy.get('[data-cy=blog-post-0]').click();
      cy.url().should('include', href);
    });
  });
});
