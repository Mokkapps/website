describe('Header Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('includes the header logo', () => {
    cy.get('[data-cy=header-menu]');
    cy.get('[data-cy=header-logo]');
  });

  it('includes navigation elements', () => {
    cy.get('[data-cy=header-menu-item-menuhome]');
    cy.get('[data-cy=header-menu-item-menublog]');
    cy.get('[data-cy=header-menu-item-menuprojects]');
    cy.get('[data-cy=header-menu-item-menuabout]');
    cy.get('[data-cy=header-menu-item-menucontact]');
  });

  it('navigates to blog page if blog menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-menublog]').click();
    cy.url().should('include', '/blog');
  });

  it('navigates to projects page if projects menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-menuprojects]').click();
    cy.url().should('include', '/projects');
  });

  it('navigates to about page if about menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-menuabout]').click();
    cy.url().should('include', '/about');
  });

  it('navigates to contact page if contact menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-menucontact]').click();
    cy.url().should('include', '/contact');
  });
});
