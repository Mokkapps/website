describe('Publications Page Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1024);
    cy.visit('/publications');
  });

  it('shows a list of talks', () => {
    const talksSection = cy.get('[data-cy="publications-talks-section"]');

    talksSection.children().should('have.length', 5);
    talksSection.first().should(
      'have.attr',
      'href',
      'https://www.meetup.com/de-DE/Munich-Frontend-Developers/events/265401762/'
    );
  });

  it('shows a list of articles', () => {
    const articlesSection = cy.get('[data-cy="publications-articles-section"]');

    articlesSection.get('[data-cy="publications-articles-section"]')
      .children()
      .should('have.length', 3);
    articlesSection.first().find('a').should(
      'have.attr',
      'href',
      'https://indepth.dev/posts/1305/the-last-guide-for-angular-change-detection-youll-ever-need'
    );
  });
});
