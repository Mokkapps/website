describe('Tips Page Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit('/tips');
  });

  it("shows all tabs", () => {
    cy.get('[data-cy=tips-tab-javascript]');
    cy.get('[data-cy=tips-tab-typescript]');
    cy.get('[data-cy=tips-tab-html]');
    cy.get('[data-cy=tips-tab-css]');
    cy.get('[data-cy=tips-tab-other]');

    cy.get('[data-cy=tips-javascript-gallery]').should('be.visible');
    cy.get('[data-cy=tips-typescript-gallery]').should('not.be.visible');
    cy.get('[data-cy=tips-html-gallery]').should('not.be.visible');
    cy.get('[data-cy=tips-css-gallery]').should('not.be.visible');
    cy.get('[data-cy=tips-other-gallery]').should('not.be.visible');
  });
});
