import config from '../../src/content/meta/config';
import { SOCIAL_LINKS } from '../../src/components/SocialLink/SocialLinks';
import { BUSINESS_PROJECTS } from "../../src/components/BusinessProjectsList";

describe('Home Page Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit('/');
  });

  it('shows a hire me button which redirects to contact page', () => {
    cy.get('[data-cy=home-hire-me-button]').click();
    cy.url().should('include', '/contact');
  });

  it('shows a schedule meeting button', () => {
    cy.get('[data-cy=home-schedule-meeting-button]');
  });

  it('shows testimonials', () => {
    cy.get('[data-cy=home-testimonial-slider]');
  });

  it('shows featured private projects', () => {
    const countFeaturedProjects = config.projects.filter(p => p.featured);
    cy.get('[data-cy="hero-private-projects-section"]')
      .children()
      .should('have.length', countFeaturedProjects.length);

    cy.get('[data-cy="hero-private-projects-more-button"]').click();
    cy.url().should('include', '/projects');
  });

  it('shows featured business projects', () => {
    cy.get('[data-cy=hero-business-project-list]')
      .children()
      .should('have.length', BUSINESS_PROJECTS.length);
  });

  it('shows latest blog posts', () => {
    cy.get('[data-cy=card-blog-post').should('have.length', 4);

    cy.get('[data-cy=hero-blog-more-button]').click();
    cy.url().should('include', '/blog');
  });

  it('shows a sidebar menu with social links', () => {
    cy.get('[data-cy=desktop-sidebar-social-links').children().should(
      'have.length',
      SOCIAL_LINKS.filter(link => link.favorite).length
    );
  });
});
