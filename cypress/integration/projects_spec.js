import config from '../../src/content/meta/config';

describe('Projects Page Test', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('shows a list of projects', () => {
    cy.get('[data-cy=projects-list]')
      .children()
      .should('have.length', config.projects.length);
  });

  it('includes correct link to project page', () => {
    cy.get('[data-cy=project-card-0]').then(() => {
      cy.get('[data-cy=project-card-0]').click();
      cy.url().should('include', config.projects[0].urls.page);
    });
  });
});
