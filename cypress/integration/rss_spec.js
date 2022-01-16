describe('RSS Test', () => {
  let urls = [];

  xit('should succesfully load each url in the feed', () => {
    cy.request('/rss.xml')
      .as('sitemap')
      .then(response => {
        urls = Cypress.$(response.body)
          .find('link')
          .toArray()
          .map(el => el.nextSibling.data)
          .filter((_, index) => index !== 0)
          .map(url => url.replace('https://www.mokkapps.de', ''));
        console.log(urls);
      })
      .and(() => {
        expect(urls).to.have.length(5);
        urls.forEach(cy.visit);
      });
  });
});
