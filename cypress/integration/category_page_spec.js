describe('Contact Page Test', () => {
    beforeEach(() => {
      cy.visit('/categories/development');
    });
  
    it('includes an introduction, a blog post list and categories', () => {  
      cy.get('[data-cy=category-introduction]');
      cy.get('[data-cy=blog-post-list]');
      cy.get('[data-cy=blog-categories]');
    });
  });
  