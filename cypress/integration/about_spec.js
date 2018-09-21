describe('About Page Test', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('includes an image', () => {
    cy.get('img');
  });

  it('includes a description', () => {
    cy.get('[data-cy=about-description]');
  });

  it('includes a skill list', () => {
    cy.get('[data-cy=about-skills]');
  });

  it('includes experience and education', () => {
    cy.get('[data-cy=about-education]');
  });
});
