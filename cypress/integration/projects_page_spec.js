import config from '../../src/content/meta/config';
import { BUSINESS_PROJECTS } from "../../src/components/BusinessProjectsList";

describe('Projects Page Test', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('shows a list of private projects', () => {
    cy.get('[data-cy=projects-list]')
      .children()
      .should('have.length', config.projects.length);
  });

  it('includes correct link to private project page', () => {
    cy.get('[data-cy=card-0]').then(() => {
      cy.get('[data-cy=card-0]').click();
      cy.url().should('include', config.projects[0].urls.page);
    });
  });

  it('shows a list of business projects', () => {
    cy.get('[data-cy=projects-business-projects]')
      .children()
      .should('have.length', BUSINESS_PROJECTS.length);
  });
});
