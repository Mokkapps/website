import config from '../../src/content/meta/config';

describe('Publications Page Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit('/publications');
  });

  it('shows a list of talks', () => {
    const talks = config.publications.filter(p => p.type === 'talk');
    const talksSection = cy.get('[data-cy="publications-talks-section"]');

    talksSection.children().should('have.length', talks.length);
    talksSection.first().should(
      'have.attr',
      'href',
      talks[0].link
    );
  });

  it('shows a list of articles', () => {
    const articles = config.publications.filter(p => p.type === 'article');
    const articlesSection = cy.get('[data-cy="publications-articles-section"]');

    articlesSection.get('[data-cy="publications-articles-section"]')
      .children()
      .should('have.length', articles.length);
    articlesSection.first().find('a').should(
      'have.attr',
      'href',
      articles[0].link
    );
  });
});
