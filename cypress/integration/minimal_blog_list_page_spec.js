describe('Minimal Blog List Page Test', () => {
  beforeEach(() => {
    cy.visit('/minimal-blog-list');
  });

  it('shows a list of blog links', () => {
    cy.get('[data-cy=minimal-blog-list-section]')
      .children()
      .find('a')
      .should('have.length.greaterThan', 30);
  });
});
