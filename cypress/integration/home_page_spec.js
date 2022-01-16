describe('Home Page Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit('/');
  });

  it('shows a hire me button which redirects to contact page', () => {
    cy.get('[data-cy=home-hire-me-button]').click();
    cy.url().should('include', '/contact');
  });

  it('shows all fields', () => {
    cy.get('[data-cy=home-references]');
  });

  it('shows featured private projects', () => {
    cy.get('[data-cy="hero-private-projects-section"]')
      .children()
      .should('have.length', 4);

    cy.get('[data-cy="hero-private-projects-more-button"]').click();
    cy.url().should('include', '/projects');
  });

  it('shows featured business projects', () => {
    cy.get('[data-cy=hero-business-project-list]')
      .children()
      .should('have.length', 2);
  });

  it('shows latest blog posts', () => {
    cy.get('[data-cy=latest-blog-post').should('have.length', 4);

    cy.get('[data-cy=hero-more-blog-posts-button]').click();
    cy.url().should('include', '/blog');
  });

  it('shows latest tips', () => {
    cy.get('[data-cy=latest-tip')
      .should('have.length.greaterThan', 0)
      .should('have.length.lessThan', 5);

    cy.get('[data-cy=hero-more-tips-button]').click();
    cy.url().should('include', '/tips');
  });

  it('shows a sidebar menu with social links', () => {
    cy.get('[data-cy=desktop-sidebar-social-links')
      .children()
      .should('have.length', 7);
  });
});
