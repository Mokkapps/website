describe('About Page Test', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('includes an image', () => {
    cy.get('img');
  });

  it('includes social links', () => {
    cy.get('[data-cy=about-social-links]');
  });

  it('includes a description', () => {
    cy.get('[data-cy=about-description]');
  });

  it('includes a skill list', () => {
    cy.get('[data-cy=about-skills]');
  });

  it('includes how i work section', () => {
    cy.get('[data-cy=about-how-i-work]');
  });
});
