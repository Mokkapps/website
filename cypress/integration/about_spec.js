describe('About Page Test', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('includes content', () => {
    cy.get('img');
    cy.get('[data-cy=about-social-links]');
    cy.get('[data-cy=about-description]');
    cy.get('[data-cy=about-skills]');
    cy.get('[data-cy=about-how-i-work]');
  });
});
