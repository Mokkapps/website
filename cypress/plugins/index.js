// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // add --disable-dev-shm-usage chrome flag
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium') {
      console.log('Adding Chrome flag: --disable-dev-shm-usage');
      launchOptions.args.push('--disable-dev-shm-usage');
    }
    return launchOptions;
  });
}
