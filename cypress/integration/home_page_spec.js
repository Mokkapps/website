import config from '../../src/content/meta/config';

describe('Home Page Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit('/');
  });

  it('includes a heading and images', () => {
    cy.get('[data-cy=home-heading]');
    cy.get('picture').should('have.length', 8);
  });

  it('shows a hire me button which redirects to contact page', () => {
    cy.get('[data-cy=home-hire-me-button]').click();
    cy.url().should('include', '/contact');
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
    cy.get('[data-cy=card-blog-post').should('have.length', 3);

    cy.get('[data-cy=hero-blog-more-button]').click();
    cy.url().should('include', '/blog');
  });
});
