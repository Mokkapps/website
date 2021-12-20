describe('Blog Post Test', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('/blog');
    cy.get('[data-cy=blog-post-0]').click();
  });

  it('show sidebar widgets', () => {
    cy.get('[data-cy=reactions]');
    cy.get('[data-cy=newsletter-subscription-sidebar]');
    cy.get('[data-cy=sidebar-share]');
    cy.get('[data-cy=sidebar-buy-me-a-coffee]');
  });

  it('does not show sidebar on mobile', () => {
    cy.viewport('iphone-6')
    cy.get('[data-cy=reactions]').should('not.be.visible');
  });
});
