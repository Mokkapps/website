describe('Minimal Tips List Page Test', () => {
  beforeEach(() => {
    cy.visit('/minimal-tip-list');
  });

  it('shows a list of tip links', () => {
    cy.get('[data-cy=minimal-tip-list-section]')
      .children()
      .find('a')
      .should('have.length.greaterThan', 5);
  });
});
