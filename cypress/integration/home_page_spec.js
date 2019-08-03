import config from '../../src/content/meta/config';

describe('Home Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('includes a heading and a quote', () => {
    cy.get('[data-cy=hero-heading]');
    cy.get('[data-cy=hero-quote]');
  });

  it('shows characteristics section', () => {
    cy.get('[data-cy=hero-characteristics-section]')
      .children()
      .should('have.length', 4);

    cy.get('[data-cy=hero-characteristics-more-button]').click();
    cy.url().should('include', '/about');
  });

  it('shows featured projects', () => {
    const countFeaturedProjects = config.projects.filter(p => p.featured);
    cy.get('[data-cy=hero-projects-section]')
      .children()
      .should('have.length', countFeaturedProjects.length);

    cy.get('[data-cy=hero-projects-more-button]').click();
    cy.url().should('include', '/projects');
  });

  it('shows latest blog posts', () => {
    cy.get('[data-cy=blog-post-0]');
    cy.get('[data-cy=blog-post-1]');
    cy.get('[data-cy=blog-post-2]');

    cy.get('[data-cy=hero-blog-more-button]').click();
    cy.url().should('include', '/blog');
  });
});
