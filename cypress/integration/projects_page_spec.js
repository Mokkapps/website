describe('Projects Page Test', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('shows a list of private projects', () => {
    cy.get('[data-cy=projects-list]')
      .children()
      .should('have.length', 8);
  });

  it('includes correct link to private project page', () => {
    cy.get('[data-cy=card-0]').then(() => {
      cy.get('[data-cy=card-0]').click();
      cy.url().should('include', 'http://localhost:8000/supermarket-challenge');
    });
  });

  it('shows a list of business projects', () => {
    cy.get('[data-cy=projects-business-projects]')
      .children()
      .should('have.length', 2);
  });
});
