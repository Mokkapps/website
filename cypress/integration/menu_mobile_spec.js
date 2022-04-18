describe('Mobile Menu Test', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
    cy.visit('/');
  });

  it('includes elements', () => {
    cy.get('[data-cy=header-menu]');
    cy.get('[data-cy=header-logo]');

    cy.get('[data-cy=language-switch]');
    cy.get('[data-cy=theme-switch]');

    cy.get('[data-cy="burger-menu-item-menu.home"]');
    cy.get('[data-cy="burger-menu-item-menu.blog"]');
    cy.get('[data-cy="burger-menu-item-menu.projects"]');
    cy.get('[data-cy="burger-menu-item-menu.about"]');
    cy.get('[data-cy="burger-menu-item-menu.contact"]');
    cy.get('[data-cy="burger-menu-item-menu.tips"]');
  });

  it('navigates to blog page if blog burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy="burger-menu-item-menu.blog"]').click();
    cy.url().should('include', '/blog');
  });

  it('navigates to projects page if projects burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy="burger-menu-item-menu.projects"]').click();
    cy.url().should('include', '/projects');
  });

  it('navigates to about page if about burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy="burger-menu-item-menu.about"]').click();
    cy.url().should('include', '/about');
  });

  it('navigates to contact page if contact burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy="burger-menu-item-menu.contact"]').click();
    cy.url().should('include', '/contact');
  });

  it('navigates to tips page if tips burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy="burger-menu-item-menu.tips"]').click();
    cy.url().should('include', '/tips');
  });
});
