describe('Tips Page Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit('/tips');
  });

  it("shows all tabs", () => {
    cy.get('[data-cy=tips-tab-vue]');
    cy.get('[data-cy=tips-tab-js]');
    cy.get('[data-cy=tips-tab-ts]');
    cy.get('[data-cy=tips-tab-html]');
    cy.get('[data-cy=tips-tab-css]');
    cy.get('[data-cy=tips-tab-other]');

    cy.get('[data-cy=tips-vue-gallery]').should('be.visible');
    cy.get('[data-cy=tips-js-gallery]').should('not.be.visible');
    cy.get('[data-cy=tips-ts-gallery]').should('not.be.visible');
    cy.get('[data-cy=tips-html-gallery]').should('not.be.visible');
    cy.get('[data-cy=tips-css-gallery]').should('not.be.visible');
    cy.get('[data-cy=tips-other-gallery]').should('not.be.visible');
  });
});
