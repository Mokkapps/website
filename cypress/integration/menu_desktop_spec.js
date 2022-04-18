describe('Desktop Menu Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024)
    cy.visit('/');
  });

  it('includes all fields', () => {
    cy.get('[data-cy=header-menu]');
    cy.get('[data-cy=header-logo]');

    // Switcher
    cy.get('[data-cy=language-switch]');
    cy.get('[data-cy=theme-switch]');

    // Navigation elements
    cy.get('[data-cy="header-menu-item-menu.home"]');
    cy.get('[data-cy="header-menu-item-menu.blog"]');
    cy.get('[data-cy="header-menu-item-menu.projects"]');
    cy.get('[data-cy="header-menu-item-menu.about"]');
    cy.get('[data-cy="header-menu-item-menu.contact"]');
    cy.get('[data-cy="header-menu-item-menu.tips"]');
  });

  it('navigates to menu pages if they are clicked', () => {
    cy.get('[data-cy="header-menu-item-menu.blog"]').click();
    cy.url().should('include', '/blog');
  });

  it('navigates to projects page if projects menu item is clicked', () => {
    cy.get('[data-cy="header-menu-item-menu.projects"]').click();
    cy.url().should('include', '/projects');
  });

  it('navigates to about page if about menu item is clicked', () => {
    cy.get('[data-cy="header-menu-item-menu.about"]').click();
    cy.url().should('include', '/about');
  });

  it('navigates to contact page if contact menu item is clicked', () => {
    cy.get('[data-cy="header-menu-item-menu.contact"]').click();
    cy.url().should('include', '/contact');
  });

  it('navigates to tips page if tips menu item is clicked', () => {
    cy.get('[data-cy="header-menu-item-menu.tips"]').click();
    cy.url().should('include', '/tips');
  });
});
