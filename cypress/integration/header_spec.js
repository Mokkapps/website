describe('Header Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('includes the header logo', () => {
    cy.get('[data-cy=header-menu]');
    cy.get('[data-cy=header-logo]');
  });

  it('includes navigation elements', () => {
    cy.get('[data-cy=header-menu-item-home]');
    cy.get('[data-cy=header-menu-item-blog]');
    cy.get('[data-cy=header-menu-item-projects]');
    cy.get('[data-cy=header-menu-item-about]');
    cy.get('[data-cy=header-menu-item-contact]');
  });

  it('navigates home if home menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-blog]').click();
    cy.url().should('include', '/blog');

    cy.get('[data-cy=header-menu-item-home]').click();
    cy.url().should('not.include', '/blog');
  });

  it('navigates to blog page if blog menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-blog]').click();
    cy.url().should('include', '/blog');
  });

  it('navigates to projects page if projects menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-projects]').click();
    cy.url().should('include', '/projects');
  });

  it('navigates to about page if about menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-about]').click();
    cy.url().should('include', '/about');
  });

  it('navigates to contact page if contact menu item is clicked', () => {
    cy.get('[data-cy=header-menu-item-contact]').click();
    cy.url().should('include', '/contact');
  });
});
