describe('Burger Menu Test', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
    cy.visit('/');
  });

  it('includes the header logo', () => {
    cy.get('[data-cy=header-menu]');
    cy.get('[data-cy=header-logo]');
  });

  it('includes navigation elements', () => {
    cy.get('[data-cy=burger-menu-item-menuhome]');
    cy.get('[data-cy=burger-menu-item-menublog]');
    cy.get('[data-cy=burger-menu-item-menuprojects]');
    cy.get('[data-cy=burger-menu-item-menuabout]');
    cy.get('[data-cy=burger-menu-item-menucontact]');
  });

  it('navigates to blog page if blog burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy=burger-menu-item-menublog]').click();
    cy.url().should('include', '/blog');
  });

  it('navigates to projects page if projects burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy=burger-menu-item-menuprojects]').click();
    cy.url().should('include', '/projects');
  });

  it('navigates to about page if about burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy=burger-menu-item-menuabout]').click();
    cy.url().should('include', '/about');
  });

  it('navigates to contact page if contact burger menu item is clicked', () => {
    cy.get('[data-cy=burger-menu-button]').click();
    cy.get('[data-cy=burger-menu-item-menucontact]').click();
    cy.url().should('include', '/contact');
  });
});
