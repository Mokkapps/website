describe('Tips Page Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit('/tips');
  });

  it('shows a list of tips', () => {
    cy.get('[data-cy=tips-list]')
      .children()
      .should('have.length.greaterThan', 0);
  });

  it('shows a list of tips', () => {
    cy.get('[data-cy=tips-list]')
      .children()
      .should('have.length.greaterThan', 0);
  });

  it('shows tip page if it is clicked', () => {
    cy.get('[data-cy=tip-0]').then($anchor => {
      const href = $anchor[0].href;

      cy.get('[data-cy=tip-0]').click();
      cy.url().should('include', href);
    });
  });
});
